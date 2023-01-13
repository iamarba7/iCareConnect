import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatLabelCharCountDisplay",
})
export class FormatLabelCharCountDisplayPipe implements PipeTransform {
  transform(label: string, count: number): string {
    if (!count) {
      return label;
    }

    return label.substring(label?.length - count, label?.length);
  }
}
