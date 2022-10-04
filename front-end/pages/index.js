import {
  Box, Button,
} from "@mui/material";
import { useRouter } from "next/router";
import HomePage from "../components/Home/HomePage";

export default function Home() {
  const router = useRouter();
  return (
      <HomePage />
  );
}
