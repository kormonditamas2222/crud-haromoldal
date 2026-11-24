import type { Konyv } from "../types/Konyv";

export function KonyvRow(props: {konyv: Konyv}) {
    return <tr key={props.konyv.id}>
        <td>{props.konyv.cim}</td>
        <td>{props.konyv.oldalszam}</td>
        <td>{props.konyv.kiadas_datuma.toString()}</td>
        <td>{props.konyv.keszleten ? "✅" : "❌"}</td>
        <td>{props.konyv.szerzo}</td>
        <td>{props.konyv.mufaj}</td>
    </tr>
}