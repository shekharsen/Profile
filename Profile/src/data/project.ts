export interface Project {
  name: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

const projectData: Project[] = [
    {
        name: "Fake News detection using FULL FINE TUNING",
        description: "Developed a Fake News Detection system by fine-tuning a Transformer model (BERT) on labeled news datasets. Implemented data preprocessing, model training, evaluation, and inference pipeline to accurately classify real vs fake news articles.",
        technologies: ["React", "TypeScript"],
        github: "https://github.com/Samadrita1234/Fake_News_Dectection_using_FULL_FINETUNING"
    },
    {
        name: "Image Classification ResNet-18 PyTorch",
        description: "Built a Streamlit web app that uses a CNN-based ResNet18 model trained on ImageNet to classify uploaded images. Implemented image preprocessing, PyTorch inference, and confidence-based predictions for real-time image recognition.",
        technologies: ["React", "TypeScript"],
        github: "https://github.com/Samadrita1234/Image-Classification-on-CIFAR-10-using-PyTorch"
    },
    {
        name: "Humor Generation Using GPT-2 with LoRA Fine-Tuning",
        description: "Implemented LoRA fine-tuning on GPT-2 to train a custom joke generation model using a small humor dataset. Utilized Hugging Face Transformers, PEFT, and the Trainer API for parameter-efficient training, evaluating model outputs, and building a text generation inference function to produce new jokes.",
        technologies: ["React", "TypeScript"],
        github: "https://github.com/Samadrita1234/LoRA_Fine_Tuning_LLM"
    },
    {
        name: "Web-Scraped RAG Chatbot",
        description: "Built a Streamlit-based RAG chatbot using LangGraph, Ollama LLM, FAISS vector store, and web-scraped website data, including embedding generation, user onboarding, chat history storage, and PII masking to deliver personalized and secure responses.",
        technologies: ["React", "TypeScript"],
        github: "https://github.com/Samadrita1234/Webscrap-Rag-based-Chatbot"
    }
]

export default projectData