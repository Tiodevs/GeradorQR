import { ModeToggle } from "./components/mode-toggle"

import {
  Menubar
} from "@/components/ui/menubar"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"


import { QRCode } from 'react-qrcode-logo';
import { useState } from "react";



function App() {

  const [input, setInput] = useState<string>("")
  const [size, setSize] = useState<number | undefined>(undefined)

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Use parseInt para converter a string de entrada para número
    const newSize = parseInt(e.target.value, 10);
    setSize(newSize || undefined); // Se a conversão falhar (NaN), defina como undefined
  };


  return (
    <div className="flex flex-col items-center justify-center pt-5">
      <Menubar className="w-60 p-3 h-14 flex justify-center">
        <ModeToggle />
        <h1 className="p-2">
          Feito por Élder Santos
        </h1>
      </Menubar>

      <Card className="mt-10 flex flex-col justify-center items-center max-w-full">
        <CardHeader>
          <CardTitle className="text-center">Gera seu QR :D</CardTitle>
          <CardDescription className="text-center">De maneira pratica e rápida</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite o link/texto"
          />
          <Input
          value={size !== undefined ? size.toString() : ""}
          type="number"
          onChange={handleSizeChange}
          placeholder="Digite o tamanho em px"
          />
        </CardContent>
        <CardFooter>
          <QRCode 
          value={input}
          size= {size !== undefined ? size : 150}
          />
        </CardFooter>
      </Card>

    </div>
  )
}

export default App
