import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="text-3xl font-bold text-neutral-100">Widget Wall</h1>
        </div>
        <div
          onClick={() => {
            console.log("hi");
          }}
        >
          {/* <Button className="flex items-center gap-2">
            Add Widgets
            <img
              src="/plus.svg"
              alt="plus-logo"
              width={12}
              className="hover:scale-110 grayscale-1 invert "
            />
          </Button> */}
          <Popover>
            <PopoverTrigger className="text-white">
              <Button className="flex items-center gap-2">
                Add Widgets
                <img
                  src="/plus.svg"
                  alt="plus-logo"
                  width={12}
                  className="hover:scale-110 grayscale-1 invert "
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-black">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none text-white">
                    Add Widget
                  </h4>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width" className="text-white">
                      Widget Title
                    </Label>
                    <Input
                      id="title"
                      placeholder="Enter titile"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-1 items-center ml-[6.3rem]">
                    <Select>
                      <SelectTrigger className="w-[180px] bg-black text-white font-semibold h-10">
                        <SelectValue placeholder="Select a chart" />
                      </SelectTrigger>
                      <SelectContent className="bg-black">
                        <SelectGroup className="text-white">
                          <SelectLabel>Charts</SelectLabel>
                          <SelectItem value="apple">Pi Chart</SelectItem>
                          <SelectItem value="banana">Bar Chart</SelectItem>
                          <SelectItem value="blueberry">Area Chart</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 items-center justify-center w-32 mt-7">
                    <Button className="bg-black border border-white">
                      Add
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
