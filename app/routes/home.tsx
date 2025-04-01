import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fives Tech Tools" },
    { name: "description", content: "Welcome to Fives Tech Tools!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
