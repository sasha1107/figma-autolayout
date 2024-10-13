const DesignPanel = () => {
  return (
    <section className="fixed h-dvh p-8 right-0 w-1/6">
      <div className="border h-full rounded-md flex flex-col divide-y">
        <div className="flex flex-col p-4">
          <div>Auto layout</div>
          <div className="grid grid-cols-7 grid-rows-5">
            <div className="col-span-3">w</div>
            <div className="col-span-3">h</div>
            <div className="col-span-3 col-start-1">col .row</div>
            <div className="col-span-3 row-span-2">3*3</div>
            <div className="col-span-3 col-start-1">gap</div>
            <div className="col-span-3 col-start-1">px</div>
            <div className="col-span-3">py</div>
            <div className="">individual padding</div>
            <div className="col-span-7">clip content</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPanel;
