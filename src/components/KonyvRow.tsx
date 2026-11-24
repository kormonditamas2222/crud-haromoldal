import type { Konyv } from "../types/Konyv";
import { handleAllapotValtozas, handleArCsokkentes, handleArNoveles } from "../utils/utils";

export function KonyvRow(props: {konyv: Konyv, oldal: string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>}) {
    return (<tr>
        <td>{props.konyv.cim}</td>
        <td>{props.konyv.ar}</td>
        <td>{props.konyv.kiadas_datuma.toString()}</td>
        <td>{props.konyv.keszleten ? "✅" : "❌"}</td>
        <td>{props.konyv.szerzo}</td>
        <td>{props.konyv.mufaj}</td>
        {props.oldal == "Felhasználó" ? "" : 
        props.oldal == "Moderátor" ?
        <td>
            <button className="btn btn-primary mx-2" onClick={() => handleAllapotValtozas(props.konyv, props.setTrigger)}>Készlet állapot változtatás</button>
            <button className="btn btn-primary mx-2" onClick={() => handleArCsokkentes(props.konyv, props.setTrigger)}>Ár csökkentés</button>
            <button className="btn btn-primary mx-2" onClick={() => handleArNoveles(props.konyv, props.setTrigger)}>Ár növelés</button>
        </td> : 
        <td></td>}
    </tr>
    )
}