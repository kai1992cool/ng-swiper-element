import { Meta, StoryObj } from "@storybook/angular";
import { mousewheelSharedMeta } from "./mousewheel-shared";

const meta: Meta = {
    ...mousewheelSharedMeta,
  title: 'Ng Swiper Element/Features/Mousewheel Control/Styling',
}

export default meta;
type Story = StoryObj;



export const NoMousewheelClass: Story = {
  args: {
    enabled: true,
    noMousewheelClass: 'swiper-no-mousewheel',
  } as any,
  parameters: {
    noMousewheelClass: true,
    storyName: 'No Mousewheel Class - mousewheel.noMousewheelClass',
    controls: { include: ['enabled', 'noMousewheelClass'] }, 
    docs: {
      description: {
        story: 'Scrolling on elements with this class will be ignored. Elements with this class will not trigger swiper navigation.',
      },
    },
  },
};