import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "lowerUpper"
})
export class LowerAndUpper implements PipeTransform {

    transform(value: any, unit:string) {

        if (value || !isNaN(value))

        {

            if(unit==='l'){

                return value.toLowerCase();

            }

            else if(unit==='u'){

                return value.toUpperCase();

            }

            else if(unit==='first'){

                return value.charAt(0).toUpperCase()+value.slice(1)

            }

        }

    }

}