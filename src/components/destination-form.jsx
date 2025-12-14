import { Label } from "./ui/label";
import { Input } from "./ui/input";
export default function DestinationForm() {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="name">name</Label>
        <Input id="name" type="text" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">description</Label>
        <Input id="description" type="text" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="image">image</Label>
        <Input id="image" type="file" />
      </div>
    </>
  );
}
