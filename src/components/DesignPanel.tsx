import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutPanelLeft, MoveRight, MoveDown, Redo2 } from "lucide-react";
import { useAtom } from "jotai";
import { autoLayoutAtom, flexDirectionAtom } from "@/store/autoLayoutAtom";

const DesignPanel = () => {
  const [autoLayout, setAutoLayout] = useAtom(autoLayoutAtom);
  const [flexDirection, setFlexDirection] = useAtom(flexDirectionAtom);
  return (
    <section className="fixed h-dvh p-8 right-0 w-1/6">
      <div className="border h-full rounded-md flex flex-col divide-y">
        <div className="flex flex-col p-4">
          <div className="flex justify-between items-center">
            <div>{autoLayout ? "Auto layout" : "Layout"}</div>
            <Toggle
              aria-label="Toggle bold"
              pressed={autoLayout}
              onPressedChange={(pressed) => setAutoLayout(pressed)}
            >
              <LayoutPanelLeft className="h-4 w-4" />
            </Toggle>
          </div>
          {autoLayout ? (
            <div className="grid grid-cols-7 grid-rows-5">
              <div className="col-span-3">w</div>
              <div className="col-span-3">h</div>
              <div className="col-span-3 col-start-1">
                <ToggleGroup
                  type="single"
                  defaultValue={flexDirection}
                  onValueChange={(
                    value: "flex-row" | "flex-col" | "flex-wrap"
                  ) => setFlexDirection(value)}
                >
                  <ToggleGroupItem value="flex-row">
                    <MoveRight size={12} />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="flex-col">
                    <MoveDown size={12} />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="flex-wrap">
                    <Redo2 size={12} className="rotate-180" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="col-span-3 row-span-2">3*3</div>
              <div className="col-span-3 col-start-1">gap</div>
              <div className="col-span-3 col-start-1">px</div>
              <div className="col-span-3">py</div>
              <div className="">individual padding</div>
              <div className="col-span-7">clip content</div>
            </div>
          ) : (
            <div className="grid grid-cols-7 grid-rows-2">
              <div className="col-span-3">w</div>
              <div className="col-span-3">h</div>
              <div>constraint</div>
              <div className="col-span-7">clip content</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DesignPanel;
