import { Meta, StoryObj } from "@storybook/angular";
import { paginationSharedMeta } from "./pagination-shared";

const meta: Meta = {
    ...paginationSharedMeta,
  title: 'Ng Swiper Element/Features/Pagination/Styling',
}

export default meta;
type Story = StoryObj;


export const PaginationBulletClass: Story = {
  args: {
    enabled: true,
    type: 'bullets',
    bulletActiveClass: 'swiper-pagination-bullet-active-custom',
    bulletClass: 'swiper-pagination-bullet-custom',
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination Bullet Class Customization - Active and Remaining Bullets Classes',
    classStory: true,
    controls: { include: ['enabled', 'type', 'bulletActiveClass', 'bulletClass'] },
    docs: {
      description: {
        story: 'CSS class name of currently active and remaining pagination bullets',
      },
    },
  },
};

export const PaginationClickableClass: Story = {
  args: {
    enabled: true,
    type: 'bullets',
    clickableClass: 'swiper-pagination-clickable-custom',
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination Clickable Class Customization - pagination.clickableClass',
    classStory: true,
    controls: { include: ['enabled', 'type', 'clickableClass'] },
    docs: {
      description: {
        story: 'CSS class name set to pagination when it is clickable',
      },
    },
  },
};

export const PaginationCurrentClass: Story = {
  args: {
    enabled: true,
    type: 'fraction',
    currentClass: 'swiper-pagination-current-custom',
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination Current Class Customization - pagination.currentClass',
    classStory: true,
    controls: { include: ['enabled', 'type', 'currentClass'] },
    docs: {
      description: {
        story: 'CSS class name of the element with currently active index in "fraction" pagination',
      },
    },
  },
};

export const PaginationTotalClass: Story = {
  args: {
    enabled: true,
    type: 'fraction',
    totalClass: 'swiper-pagination-total-custom',
  } as any,
  argTypes: {
    type: {
      control: { disable: true },
    },
  },
  parameters: {
    storyName: 'Pagination Total Class Customization - pagination.totalClass',
    classStory: true,
    controls: { include: ['enabled', 'type', 'totalClass'] },
    docs: {
      description: {
        story: 'CSS class name of the element with total number of slides in "fraction" pagination',
      },
    },
  },
};

export const PaginationModifierClass: Story = {
  args: {
    enabled: true,
    modifierClass: 'swiper-pagination-',
  } as any,
  parameters: {
    storyName: 'Pagination Modifier Class Customization - pagination.modifierClass',
    classStory: true,
    controls: { include: ['enabled', 'modifierClass'] },
    docs: {
      description: {
        story: 'The beginning of the modifier CSS class name that will be added to pagination element depending on parameters, like swiper-pagination-bullets, swiper-pagination-fraction, etc.',
      },
    },
  },
};

export const PaginationProgressbarFillClass: Story = {
  args: {
    enabled: true,
    type: 'progressbar',
    progressbarFillClass: 'swiper-pagination-progressbar-fill-custom',
  } as any,
  argTypes: {
    type: {
      control: { disable: true },
    },
  },
  parameters: {
    storyName: 'Pagination Progressbar Fill Class Customization - pagination.progressbarFillClass',
    classStory: true,
    controls: { include: ['enabled', 'type', 'progressbarFillClass'] },
    docs: {
      description: {
        story: 'CSS class name of pagination progressbar fill element',
      },
    },
  },
};

export const PaginationProgressbarOppositeClass: Story = {
  args: {
    enabled: true,
    type: 'progressbar',
    progressbarOpposite: true,
    progressbarOppositeClass: 'swiper-pagination-progressbar-opposite-custom',
  } as any,
  argTypes: {
    type: {
      control: { disable: true },
    },
    progressbarOpposite: {
      control: { disable: true },
    },
  },
  parameters: {
    storyName: 'Pagination Progressbar Opposite Class Customization - pagination.progressbarOppositeClass',
    classStory: true,
    controls: { include: ['enabled', 'type', 'progressbarOpposite', 'progressbarOppositeClass'] },
    docs: {
      description: {
        story: 'CSS class name of pagination progressbar opposite motor element',
      },
    },
  },
};

export const PaginationHiddenClass: Story = {
  args: {
    enabled: true,
    hideOnClick: true,
    hiddenClass: 'swiper-pagination-hidden-custom',
  } as any,
  parameters: {
    storyName: 'Pagination Hidden Class Customization - pagination.hiddenClass',
    classStory: true,
    controls: { include: ['enabled', 'hiddenClass', 'hideOnClick'] },
    docs: {
      description: {
        story: 'CSS class name sent to the pagination element when it becomes inactive/hidden',
      },
    },
  },
};

export const PaginationLockClass: Story = {
  args: {
    enabled: true,
    lockClass: 'swiper-pagination-lock-custom',
  } as any,
  parameters: {
    numberOfSlides: 1,
    storyName: 'Pagination Lock Class Customization - pagination.lockClass',
    classStory: true,
    controls: { include: ['enabled', 'lockClass'] },
    docs: {
      description: {
        story: 'CSS class name added to pagination element when it has only 1 slide and should be hidden/locked',
      },
    },
  },
};

export const PaginationHorizontalClass: Story = {
  args: {
    enabled: true,
    horizontalClass: 'swiper-pagination-horizontal-custom',
  } as any,
  parameters: {
    storyName: 'Pagination Horizontal Layout Class - pagination.horizontalClass',
    classStory: true,
    controls: { include: ['enabled', 'horizontalClass'] },
    docs: {
      description: {
        story: 'CSS class name added to pagination element when Swiper slider orientation is horizontal',
      },
    },
  },
};

export const PaginationVerticalClass: Story = {
  args: {
    enabled: true,
    verticalClass: 'swiper-pagination-vertical-custom',
  } as any,
  parameters: {
    isVertical: true,
    storyName: 'Pagination Vertical Layout Class - pagination.verticalClass',
    classStory: true,
    controls: { include: ['enabled', 'verticalClass'] },
    docs: {
      description: {
        story: 'CSS class name added to pagination element when Swiper slider orientation is vertical',
      },
    },
  },
};