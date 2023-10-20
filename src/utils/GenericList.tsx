import { ReactElement } from "react";
import Loading from "./Loading";


export default function GenericList(props: genericListProps) {
   
        return props.children;
    
}

interface genericListProps {
    children: any;
    list: any;
    
}