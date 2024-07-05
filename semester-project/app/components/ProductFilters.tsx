"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { fontSans } from "@/app/lib/fonts"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion"
import { Checkbox } from "@/app/components/ui/checkbox"

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "black", label: "Black" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "red", label: "Red" },
      { value: "pink", label: "Pink" },
      { value: "purple", label: "Purple" },
      { value: "white", label: "White" },
      { value: "orange", label: "Orange" },
    ],
  },
]

function ProductFilters() {
const searchParams = useSearchParams()
const router = useRouter()
const searchValues = Array.from(searchParams.entries())

  return (
    <form className="sticky top-20">
      <h3 className="sr-only text-zinc-800">Filter by Color</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold text-zinc-400 text-uppercase"></span>
                  {searchParams.get(section.id)
                   ? `(${searchParams.get(section.id)})`
                    : ""}
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 ">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2 py-2 hover:bg-zinc-100 "
                  >
                    <Checkbox 
                      id={`filter-${section.id}-${optionIdx}`} 
                      checked = { searchValues.some(
                        ([key, value]) =>
                         key === section.id && value === option.value
                        )}
                      onClick={(event) => {
                        const params = new URLSearchParams(searchParams)
                        const checked =
                         event.currentTarget.dataset.state === "checked"
                        checked
                         ? params.delete(section.id)
                         : params.set(section.id, option.value)
                        router.replace(`/shop?${params.toString()}`)
                    }}/>
                    <label 
                    htmlFor={`filter-${section.id}-${optionIdx}`}
                    className="text-sm font-medium leading-none text-zinc-800 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
export default ProductFilters