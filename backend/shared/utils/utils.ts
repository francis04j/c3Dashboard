
  
  export const CHAT_COMPLETIONS_API_URL =
    "https://api.openai.com/v1/chat/completions";
  
  export const AUDIO_TRANSCRIPTIONS_API_URL =
    "https://api.openai.com/v1/audio/transcriptions";
  
  export const EMBEDDINGS_API_URL = "https://api.openai.com/v1/embeddings";
  
  export const GENERATE_CLONE_VOICE_URL =
    "https://play.ht/api/v2/cloned-voices/instant";
  export const MESSAGE_TO_VOICE_URL = "https://play.ht/api/v2/tts";
  
  export const getTextToSpeechApiUrl = (voice_id: string) =>
    `https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`;
  
  export const ELVEN_LABS_DEFAULT_MODEL_ID = "eleven_monolingual_v1";
  
  export const ELVEN_LABS_DEFAULT_VOICE_ID = "21m00Tcm4TlvDq8ikWAM";
  
  export const IMAGE_GENERATION_API_URL =
    "https://api.openai.com/v1/images/generations";
  
  export const REPLICATE_API_URL = "https://api.replicate.com/v1/predictions";
  
  export const HUGGING_FACE_API_URL =
    "https://api-inference.huggingface.co/models/";
  
  export const GOOGLE_TEXT_TO_SPEECH_API_URL = "https://texttospeech.googleapis.com/v1/text:synthesize";
  
  export const GOOGLE_OBTAIN_ACCESS_TOKEN_URL = "https://oauth2.googleapis.com/token";
  
  export const EDIT_IMAGE_API_URL = "https://api.openai.com/v1/images/edits";
  
  export const IMAGE_VARIATIONS_API_URL =
    "https://api.openai.com/v1/images/variations";
  
  