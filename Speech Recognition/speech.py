import pyaudio
import collections
import time
from pyannote.audio import Pipeline
import threading
import wave
from pyannote.core import Segment

# Constants
SAMPLE_RATE = 16000  # Higher sample rate for better quality
FRAME_DURATION = 10  # Duration of each frame in milliseconds
FRAME_SIZE = int(SAMPLE_RATE * FRAME_DURATION / 1000)  # Number of audio samples per frame

# Initialize PyAudio
p = pyaudio.PyAudio()

# Initialize the speaker diarization pipeline from pyannote
pipeline = Pipeline.from_pretrained("pyannote/speaker-diarization-3.1", use_auth_token="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")

# Open audio stream to capture live audio from the microphone
stream = p.open(format=pyaudio.paInt16,
                channels=1,
                rate=SAMPLE_RATE,
                input=True,
                frames_per_buffer=FRAME_SIZE)

# Buffer to hold frames
frame_buffer = collections.deque(maxlen=10)

# Function to read audio from the stream
def read_audio_stream():
    while True:
        try:
            frame = stream.read(FRAME_SIZE)
            if len(frame) != FRAME_SIZE * 2:  # 2 bytes per sample for 16-bit PCM
                continue  # Skip malformed frames
            frame_buffer.append(frame)
        except Exception as e:
            print(f"Error reading frame: {e}")
            time.sleep(0.1)

# Function to perform speaker diarization on the captured audio
def perform_diarization():
    while True:
        if len(frame_buffer) > 0:
            # Concatenate frames in the buffer to form a chunk
            audio_chunk = b''.join(frame_buffer)

            # Create a temporary file for the audio chunk in WAV format
            with wave.open("temp_audio.wav", "wb") as f:
                f.setnchannels(1)  # Mono channel
                f.setsampwidth(2)  # 16-bit PCM
                f.setframerate(SAMPLE_RATE)  # Sample rate
                f.writeframes(audio_chunk)

            # Apply speaker diarization using pyannote
            diarization_result = pipeline({'uri': 'live_audio', 'audio': 'temp_audio.wav'})

            # Check the number of detected speakers
            speakers = set()  # Use a set to track unique speakers
            for speech_segment, _, speaker in diarization_result.itertracks(yield_label=True):
                speakers.add(speaker)

            # Output whether there is one speaker or multiple
            if len(speakers) == 1:
                print("One voice detected.")
            else:
                print(f"Multiple voices detected: {len(speakers)}")

            time.sleep(0.1)  # Allow time for processing
# Start the audio reading thread
audio_thread = threading.Thread(target=read_audio_stream, daemon=True)
audio_thread.start()

# Start the diarization processing
diarization_thread = threading.Thread(target=perform_diarization, daemon=True)
diarization_thread.start()

try:
    while True:
        time.sleep(1)  # Keep the main thread alive
except KeyboardInterrupt:
    print("Stopping detection.")

finally:
    if stream.is_active():
        stream.stop_stream()
    stream.close()
    p.terminate()
