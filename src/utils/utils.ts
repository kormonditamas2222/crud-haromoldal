import type { Konyv } from "../types/Konyv";

export async function handleAllapotValtozas(konyv: Konyv, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) {
    try {
        const response = await fetch(`http://localhost:3000/konyvek/${konyv.id}`, {
            "method": "PATCH", 
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({keszleten: !konyv.keszleten})
        })
        if (!response.ok) {
            throw new Error("Hiba a készlet állapotának változtatásánál")
        }
        setTrigger(elozo => !elozo)
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error)
        }
    }
}

export async function handleArCsokkentes(konyv: Konyv, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) {
    try {
        const response = await fetch(`http://localhost:3000/konyvek/${konyv.id}`, {
            "method": "PATCH", 
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({ar: konyv.ar - 500 < 2000 ? 2000 : konyv.ar - 500})
        })
        if (!response.ok) {
            throw new Error("Hiba a készlet állapotának változtatásánál")
        }
        setTrigger(elozo => !elozo)
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error)
        }
    }
}

export async function handleArNoveles(konyv: Konyv, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) {
    try {
        const response = await fetch(`http://localhost:3000/konyvek/${konyv.id}`, {
            "method": "PATCH", 
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({ar: konyv.ar + 500})
        })
        if (!response.ok) {
            throw new Error("Hiba a készlet állapotának változtatásánál")
        }
        setTrigger(elozo => !elozo)
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error)
        }
    }
}