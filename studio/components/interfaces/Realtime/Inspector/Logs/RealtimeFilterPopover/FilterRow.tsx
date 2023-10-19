import { Trash } from 'lucide-react'
import { Button, Input, Listbox } from 'ui'

export const FilterRow = () => {
  return (
    <div className="flex flex-row gap-4">
      <Listbox type="select" value="AND" size="tiny" onChange={() => {}}>
        <Listbox.Option key="AND" label="AND" value="AND">
          <span className="text-foreground">and</span>
        </Listbox.Option>
        <Listbox.Option key="OR" label="OR" value="OR">
          <span className="text-foreground">or</span>
        </Listbox.Option>
      </Listbox>
      <div className="flex flex-row">
        <Listbox
          type="select"
          value="AND"
          size="tiny"
          onChange={() => {}}
          buttonClassName="rounded-r-none"
        >
          <Listbox.Option key="AND" label="AND" value="AND">
            <span className="text-foreground">and</span>
          </Listbox.Option>
          <Listbox.Option key="OR" label="OR" value="OR">
            <span className="text-foreground">or</span>
          </Listbox.Option>
        </Listbox>

        <Listbox
          type="select"
          value="eq"
          size="tiny"
          onChange={() => {}}
          buttonClassName="rounded-none"
        >
          <Listbox.Option key="eq" label="eq" value="eq" className="!w-full">
            <span className="text-foreground">equal to</span>
          </Listbox.Option>
          <Listbox.Option key="neq" label="neq" value="neq" className="!w-full">
            <span className="text-foreground">not equal to</span>
          </Listbox.Option>
          <Listbox.Option key="lt" label="lt" value="lt" className="!w-full">
            <span className="text-foreground">less than</span>
          </Listbox.Option>
          <Listbox.Option key="lte" label="lte" value="lte" className="!w-full">
            <span className="text-foreground">less than or equal to</span>
          </Listbox.Option>
          <Listbox.Option key="gt" label="gt" value="gt" className="!w-full">
            <span className="text-foreground">greater than</span>
          </Listbox.Option>
          <Listbox.Option key="gte" label="gte" value="gte" className="!w-full">
            <span className="text-foreground">greater than or equal to</span>
          </Listbox.Option>
          <Listbox.Option key="in" label="in" value="in" className="!w-full">
            <span className="text-foreground">contained in</span>
          </Listbox.Option>
        </Listbox>
        <Input inputClassName="rounded-none" size="tiny" />
        <Button className="rounded-l-none" size="tiny" icon={<Trash size={16} />} type="default" />
      </div>
    </div>
  )
}
