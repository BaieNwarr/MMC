import Button from "@/design/button/button";

export default function Home() {
  return (
     <div className="flex align-item gap-4 text-3xl justify-center">
     <Button variant="base">Primaire</Button>
     <Button variant="variant">Secondaire</Button>
     <Button variant="success">Succes</Button>
     <Button variant="fail">Error</Button>
     <Button variant="neutre">Neutre</Button>
     </div>
  );
}
