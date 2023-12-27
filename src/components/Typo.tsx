import { twMerge } from 'tailwind-merge'

type ExtractText< S extends string> = S extends `text-[${infer T}px]` ? `${T}` : S
const  textArray = [
    "text-[14px]",
    "text-[28px]",
    "text-[32px]"
] as const

export default function Typo({children,size,className}:{
  children: React.ReactNode
  size:  ExtractText< typeof textArray[number]> 
  className?: string
}) {

    
    const findText = (
        text:  ExtractText< typeof textArray[number]>
    ) => {
        return textArray.find((t) =>  t.includes(text))
    }
    const  type = findText(size)
    return (
      <p style={{
        font: "500"
      }} className={ twMerge(type, className)  }> {children}</p>
    );
  }
  