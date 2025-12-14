import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function PackageForm() {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="name">package name</Label>
        <Input id="name" type="text" />
      </div>
      <div className="flex justify-between items-center">
        <div className="grid gap-2 w-[48%]">
            <Label htmlFor="duration">duration</Label>
            <Input id="duration" type="number" />
        </div>
        <div className="grid gap-2 w-[48%]">
            <Label htmlFor="price">price</Label>
            <Input id="price" type="number" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Activities</Label>
        <textarea id="description" className="border rounded-md p-2" rows="4" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="image">image</Label>
        <Input id="image" type="file" />
      </div>
    </>
  );
}
