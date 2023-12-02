import Logo from "@/assets/logo.png";
import treatmentImg from "@/assets/treatment/treatment.png";
import Image from "@/lib/Image";
import { DialogHeader } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import { useCallback, useState } from "react";

export default function TreatmentProfile() {
    const [currentSlide, setCurrentSlide] = useState(0);

        const next = useCallback(() => {
            setCurrentSlide((prevSlide) => prevSlide + 1);
        }, []);

        const prev = useCallback(() => {
            setCurrentSlide((prevSlide) => prevSlide - 1);
        }, []);

        const updateCurrentSlide = useCallback(
            (index) => {
                if (currentSlide !== index) {
                    setCurrentSlide(index);
                }
            },
            [currentSlide]
        );
  return (
    <>
      <DialogHeader>
        <div className="flex items-center justify-center h-10">
          <Image alt="logo" width={180} src={Logo} />
        </div>
      </DialogHeader>

      <div className="flex flex-col items-center justify-center w-full gap-4 justify-items-center">
        <p className="text-2xl">Treatment profile </p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="col-span-2 lg:col-span-1 relative">
            <div className="absolute z-10 bg-white w-[40%] h-[2px] top-[30%] left-[32%] rotate-[-11deg]">
                <p className="absolute right-[-32px] z-1 text-white border-4 border-solid border-[#F1B34A] rounded-full w-[35px] h-[35px] flex justify-center items-center top-[-17px] bg-[#F1B34A4D] font-bold rotate-[11deg]">{currentSlide + 1}</p>
            </div>
            <div className="absolute bg-white px-[12px] py-[2px] top-5 right-3 z-10 rounded">
                <p className="font-[600] text-[#4C4D4F] text-[16px]">{currentSlide+1}/3</p>
            </div>
            <div className="flex justify-between items-center top-0 absolute z-10 w-[100%] h-[90%] px-[12px]">
            <button onClick={prev}><ChevronLeftCircle absoluteStrokeWidth color="#F1B34A" size={35} /></button>
           <button onClick={next}> <ChevronRightCircle absoluteStrokeWidth color="#F1B34A" size={35} /></button>
            </div>
            <Carousel showArrows={false} showStatus={false} showIndicators={false} onChange={updateCurrentSlide} selectedItem={currentSlide}>
              <Image alt="logo" src={treatmentImg} className="w-full h-full" />
              <Image alt="logo" src={treatmentImg} className="w-full h-full" />
              <Image alt="logo" src={treatmentImg} className="w-full h-full" />
            </Carousel>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-2">
              <p className="font-medium">Tag details</p>
              <p className="text-sm">Tag no : 1</p>
              <div>
                <Select>
                  <SelectTrigger className="w-full bg-gray-100/50">
                    <SelectValue placeholder="Select the part of body" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div>
               
                <Input
                  placeholder="Title"
                  className="border-0 bg-gray-100/50"
                ></Input>
              </div>
              <div>
               
                <Input
                  placeholder="Dosage name/ mls"
                  className="border-0 bg-gray-100/50"
                ></Input>
              </div>
              <div className="h-20 border rounded-lg bg-gray-100/50">
                <Input
                  placeholder="Description"
                  className="border-0 bg-gray-100/50"
                ></Input>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <Card className="w-full p-4 mb-4 rounded-xl bg-gray-100/50">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tag no</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Dosage</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4].map((item) => (
                    <TableRow key={item}>
                      <TableCell className="font-medium">{item}</TableCell>
                      <TableCell>PHR Injection</TableCell>
                      <TableCell>100 mls</TableCell>
                      <TableCell>Lorem ipsum dolor sit amet.....</TableCell>
                      <TableCell>View</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
