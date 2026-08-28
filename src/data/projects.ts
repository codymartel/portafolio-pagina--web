export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: "dev" | "video";
  year: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "YARVIS",
    description: "Sistema de clasificación de documentos municipales con NLP",
    tech: ["FastAPI", "Firebase", "TensorFlow.js"],
    category: "dev",
    year:2021,
  },
  {
    id: 2,
    title: "YapaVenta",
    description: "App Android de ventas e inventario",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
    category: "dev",
    year:2021,
  },
];