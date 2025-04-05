'use client';
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export default function Finanzierungsrechner() {
  const [preis, setPreis] = useState(27160);
  const [anzahlung, setAnzahlung] = useState(9053);
  const [laufzeit, setLaufzeit] = useState(36);
  const [zins, setZins] = useState(4.9);
  const [zinsUebernahme, setZinsUebernahme] = useState(100);
  const [ergebnis, setErgebnis] = useState(null);

  const berechne = () => {
    const r = zins / 100 / 12;
    const finanzierungsbetrag = preis - anzahlung;
    const monatlicheRate = finanzierungsbetrag / laufzeit;
    const bankFinanzierung =
      monatlicheRate * ((1 + r) ** laufzeit - 1) / (r * (1 + r) ** laufzeit);
    const zinskosten = bankFinanzierung - finanzierungsbetrag;
    const uebernahmeBetrag = zinskosten * (zinsUebernahme / 100);
    const kundenzahlung = preis - uebernahmeBetrag;

    setErgebnis({
      monatlicheRate: monatlicheRate.toFixed(2),
      bankFinanzierung: bankFinanzierung.toFixed(2),
      zinskosten: zinskosten.toFixed(2),
      uebernahmeBetrag: uebernahmeBetrag.toFixed(2),
      kundenzahlung: kundenzahlung.toFixed(2)
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold text-[#8b0000]">Individueller Finanzierungsrechner</h1>
      
      <label>Klavierpreis (€):</label>
      <Input type="number" value={preis} onChange={(e) => setPreis(parseFloat(e.target.value))} />
      
      <label>Anzahlung (€):</label>
      <Input type="number" value={anzahlung} onChange={(e) => setAnzahlung(parseFloat(e.target.value))} />
      
      <label>Laufzeit (Monate):</label>
      <Input type="number" value={laufzeit} onChange={(e) => setLaufzeit(parseInt(e.target.value))} />
      
      <label>Zinssatz der Bank (% p.a.):</label>
      <Input type="number" value={zins} onChange={(e) => setZins(parseFloat(e.target.value))} />
      
      <label>Wie viel % der Zinskosten übernehmen wir?</label>
      <Input type="number" value={zinsUebernahme} onChange={(e) => setZinsUebernahme(parseFloat(e.target.value))} />

      <Button onClick={berechne}>Jetzt berechnen</Button>

      {ergebnis && (
        <Card>
          <CardContent className="p-4 space-y-2 text-[#2e2e2e]">
            <p><strong>Monatliche Rate (0 % für den Kunden):</strong> € {ergebnis.monatlicheRate}</p>
            <p><strong>Finanzierungsbetrag bei Bankzins:</strong> € {ergebnis.bankFinanzierung}</p>
            <p><strong>Gesamte Zinskosten:</strong> € {ergebnis.zinskosten}</p>
            <p><strong>Unser übernommener Anteil:</strong> € {ergebnis.uebernahmeBetrag}</p>
            <p><strong>Kunde zahlt effektiv:</strong> € {ergebnis.kundenzahlung}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
