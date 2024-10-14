import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Frame, Type } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LayerPanel = () => {
  return (
    <section className="fixed h-dvh p-8 left-0 w-1/6">
      <div className="border h-full rounded-md flex flex-col divide-y bg-[#2C2C2C]">
        <div className="flex flex-col">
          <div>Figma Auto layout</div>

          <Tabs defaultValue="file">
            <TabsList>
              <TabsTrigger value="file">File</TabsTrigger>
              <TabsTrigger value="assets">Assets</TabsTrigger>
            </TabsList>
            <TabsContent value="file">
              <Accordion type="multiple" defaultValue={["page-1", "layers"]}>
                <AccordionItem value="page-1" className="border-b border-white">
                  <AccordionTrigger className="flex-row-reverse gap-1">
                    <div className="flex-grow text-left">Pages</div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-[#383838] py-1 rounded-sm px-2">
                      Page
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="layers" className="border-b border-white">
                  <AccordionTrigger className="flex-row-reverse gap-1">
                    <div className="flex-grow text-left">Layers</div>
                  </AccordionTrigger>
                  <AccordionContent className="px-2 pb-0">
                    <Accordion type="multiple">
                      <AccordionItem value="a">
                        <AccordionTrigger className="flex-row-reverse gap-1">
                          <div className="flex-grow text-left flex gap-2 items-center">
                            <Frame size={12} className="text-[#808080] " />
                            Frame A
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-2 pb-0">
                          <div className="rounded-sm px-4 flex gap-2 items-center">
                            <Type size={12} className="text-[#808080] " />A
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="b">
                        <AccordionTrigger className="flex-row-reverse gap-1">
                          <div className="flex-grow text-left flex gap-2 items-center">
                            <Frame size={12} className="text-[#808080] " />
                            Frame B
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-0">
                          <div className="rounded-sm px-2 flex gap-2 items-center">
                            <Type size={12} className="text-[#808080] " />B
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="c">
                        <AccordionTrigger className="flex-row-reverse gap-1">
                          <div className="flex-grow text-left flex gap-2 items-center">
                            <Frame size={12} className="text-[#808080] " />
                            Frame C
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-2">
                          <div className="rounded-sm px-4 flex gap-2 items-center">
                            <Type size={12} className="text-[#808080] " />C
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="assets">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default LayerPanel;
