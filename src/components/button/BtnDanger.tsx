import Typo from "../Typo";
import { twMerge } from 'tailwind-merge'

interface props extends  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    
}


export default function BtnDanger( props: props ) {
        const  {children ,className } = props
    let defaultClassName = " align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
    return <button type="button" { ...props} className={twMerge(defaultClassName, className)} >
            <Typo size="14">
                    {children}
            </Typo> 
    </button>
}