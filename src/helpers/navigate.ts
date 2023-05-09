import { IPropsNavigate } from "@/components/ui/navigateComponent";

// ScrollBehavior: auto | smooth
export function navigateComponent({ id, behavior = "smooth" }: IPropsNavigate) {
  const element = document.querySelectorAll(
    `${isValidElementId(id) ? id : "#" + id}`
  );
  if (!element) {
    return;
  }

  if (element) {
    element[0].scrollIntoView({ behavior: <ScrollBehavior>behavior });
  }
}

function isValidElementId(id: string) {
  return id.startsWith("#");
}
