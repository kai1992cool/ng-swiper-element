import { Meta, StoryObj } from "@storybook/angular";
import { paginationSharedMeta } from "./pagination-shared";
import { Swiper } from "swiper/types";

const meta: Meta = {
    ...paginationSharedMeta,
  title: 'Ng Swiper Element/Features/Pagination/General',
}

export default meta;
type Story = StoryObj;

export const EnablePagination: Story = {
  args: {
    type: 'bullets',
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Enable Pagination',
    controls: { include: ['type', 'enabled'] }, 
    docs: {
      description: {
        story: 'Enable pagination with bullets type. Bullets are clickable by default, allowing users to jump to specific slides.',
      },
    },
  },
};

export const PaginationBulletElement: Story = {
  args: {
    enabled: true,
    type: 'bullets',
    bulletElement: 'p',
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination bullet element HTML Tag - pagination.bulletElement',
    controls: { include: ['enabled', 'type', 'bulletElement'] },
    docs: {
      description: {
        story: 'Defines which HTML tag will be used to represent single pagination bullet. Only for \'bullets\' pagination type.',
      },
    },
  },
};

export const PaginationBulletClickable: Story = {
  args: {
    enabled: true,
    type: 'bullets',
    clickable: true,
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination bullet clickable - pagination.clickable',
    controls: { include: ['enabled', 'type', 'clickable'] },
    docs: {
      description: {
        story: 'If true then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type',
      },
    },
  },
};

export const PaginationHideOnClick: Story = {
  args: {
    enabled: true,
    type: 'bullets',
    hideOnClick: true,
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination bullet hide on click - pagination.hideOnClick',
    controls: { include: ['enabled', 'type', 'hideOnClick'] },
    docs: {
      description: {
        story: 'Toggle (hide/show) pagination container visibility after click on Slider\'s container',
      },
    },
  },
};

export const PaginationProgressBar: Story = {
  args: {
    enabled: true,
    type: 'progressbar',
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination bullet progress bar - pagination.type',
    controls: { include: ['enabled', 'type'] },
    docs: {
      description: {
        story: 'String with type of pagination. Can be \'bullets\', \'fraction\', \'progressbar\' or \'custom\'',
      },
    },
  },
};

export const PaginationProgressBarOpposite: Story = {
  args: {
    enabled: true,
    type: 'progressbar',
    progressbarOpposite: true,
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination bullet progress bar opposite - pagination.progressbarOpposite',
    controls: { include: ['enabled', 'type', 'progressbarOpposite'] },
    docs: {
      description: {
        story: 'Makes pagination progressbar opposite to Swiper\'s direction parameter, means vertical progressbar for horizontal swiper direction and horizontal progressbar for vertical swiper direction',
      },
    },
  },
};

export const PaginationDynamicBullets: Story = {
  args: {
    enabled: true,
    type: 'bullets',
    dynamicBullets: true,
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    numberOfSlides: 1000,
    storyName: 'Pagination dynamic bullet - pagination.dynamicBullets',
    controls: { include: ['enabled', 'type', 'dynamicBullets'] },
    docs: {
      description: {
        story: 'Good to enable if you use bullets pagination with a lot of slides. So it will keep only few bullets visible at the same time.',
      },
    },
  },
};

export const PaginationDynamicMainBullets: Story = {
  args: {
    enabled: true,
    type: 'bullets',
    dynamicBullets: true,
    dynamicMainBullets: 10,
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    numberOfSlides: 1000,
    storyName: 'Pagination dynamic bullet - pagination.dynamicBullets',
    controls: { include: ['enabled', 'type', 'dynamicBullets', 'dynamicMainBullets'] },
    docs: {
      description: {
        story: 'The number of main bullets visible when dynamicBullets enabled.',
      },
    },
  },
};

export const PaginationFraction: Story = {
  args: {
    enabled: true,
    type: 'fraction',
  } as any,
  argTypes: {
    type: {
      control: { disable: false, },
    },
  },
  parameters: {
    storyName: 'Pagination Fraction - pagination.type',
    controls: { include: ['enabled', 'type'] },
    docs: {
      description: {
        story: 'String with type of pagination. Can be \'bullets\', \'fraction\', \'progressbar\' or \'custom\'',
      },
    },
  },
};

export const PaginationFormatFractionCurrent: Story = {
  args: {
    enabled: true,
    type: 'fraction',
    formatFractionCurrent: (num: number) => {
      return `Slide ${num}`;
    }
  } as any,
  argTypes: {
    type: {
      control: { disable: false, },
    },
  },
  parameters: {
    storyName: 'Pagination Format Fraction Current - pagination.formatFractionCurrent',
    controls: { include: ['enabled', 'type', 'formatFractionCurrent'] },
    docs: {
      description: {
        story: 'format fraction pagination current number. Function receives current number, and you need to return formatted value',
      },
    },
  },
};

export const PaginationFormatFractionTotal: Story = {
  args: {
    enabled: true,
    type: 'fraction',
    formatFractionTotal: (num: number) => {
      return `Total ${num}`;
    },
    formatFractionCurrent: (num: number) => {
      return `Slide ${num}`;
    }
  } as any,
  argTypes: {
    type: {
      control: { disable: false, },
    },
  },
  parameters: {
    storyName: 'Pagination Format Fraction Total - pagination.formatFractionTotal',
    controls: { include: ['enabled', 'type', 'formatFractionTotal', 'formatFractionCurrent'] },
    docs: {
      description: {
        story: 'format fraction pagination total number. Function receives total number, and you need to return formatted value',
      },
    },
  },
};

export const PaginationRenderBullet: Story = {
  args: {
    enabled: true,
    type: 'bullets',
    renderBullet: function (index: number, className: string) {
      return '<span class="testy ' + className + '">' + (index + 1) + '</span>';
    },
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination Render Bullet HTML - pagination.renderBullet',
    controls: { include: ['enabled', 'type', 'renderBullet'] },
    docs: {
      description: {
        story: 'This parameter allows totally customize pagination bullets, you need to pass here a function that accepts index number of pagination bullet and required element class name (className). Only for \'bullets\' pagination type',
      },
    },
  },
};

export const PaginationRenderCustom: Story = {
  args: {
    enabled: true,
    type: 'custom',
    renderCustom: function (swiper: Swiper, current: number, total: number) { 
      return `Slide ${current} of total ${total} slides`;
    },
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination Render Custom HTML - pagination.renderCustom',
    controls: { include: ['enabled', 'type', 'renderCustom'] },
    docs: {
      description: {
        story: 'This parameter is required for \'custom\' pagination type where you have to specify how it should be rendered.',
      },
    },
  },
};

export const PaginationRenderFractionHTML: Story = {
  args: {
    enabled: true,
    type: 'fraction',
    renderFraction: function (currentClass: SVGStringList, totalClass: SVGStringList) {
      return 'Slide: <span class="' + currentClass + '"></span>' +
              ' / ' +
              'Total: <span class="' + totalClass + '"></span>';
    },
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination Render Fraction HTML - pagination.renderFraction',
    controls: { include: ['enabled', 'type', 'renderFraction'] },
    docs: {
      description: {
        story: 'This parameter allows to customize "fraction" pagination html. Only for \'fraction\' pagination type',
      },
    },
  },
};

export const PaginationRenderProgressBarHTML: Story = {
  args: {
    enabled: true,
    type: 'progressbar',
    renderProgressbar: function (progressbarFillClass: string) {
      return '<span class="custom-progressbar ' + progressbarFillClass + '"></span>';
    },
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination Render Fraction HTML - pagination.renderProgressbar',
    controls: { include: ['enabled', 'type', 'renderProgressbar'] },
    docs: {
      description: {
        story: 'This parameter allows to customize "progress" pagination. Only for \'progress\' pagination type',
      },
    },
  },
};