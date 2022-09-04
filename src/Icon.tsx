import React, { FunctionComponent } from 'react';
import {
  AirbnbIcon,
  SearchIcon,
  LanguageIcon,
  MenuIcon,
  PersonIcon,
  PlusMinusIcon,
  NextIcon,
  PrevIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
  HeartIcon,
  FilterIcon,
} from './Icons';

interface IconTypes {
  name: string;
  size?: number | string;
  height?: number | string;
  width?: number | string;
  onClickFunc?: Function;
  color?: string;
  className?: string;
}

const Icon: FunctionComponent<IconTypes> = ({
  name,
  size,
  height,
  width,
  onClickFunc,
  color,
  className,
}: IconTypes) => {
  const icons: any = {
    airbnb: AirbnbIcon,
    search: SearchIcon,
    language: LanguageIcon,
    menu: MenuIcon,
    person: PersonIcon,
    plusMinus: PlusMinusIcon,
    next: NextIcon,
    prev: PrevIcon,
    minus: MinusIcon,
    plus: PlusIcon,
    star: StarIcon,
    heart: HeartIcon,
    filter: FilterIcon,
  };

  const Component = icons[name];

  if (size) {
    return (
      <Component
        {...{
          size,
          onClickFunc,
          color,
          className,
        }}
      />
    );
  } else if (height && width) {
    return (
      <Component
        {...{
          width,
          height,
          onClickFunc,
          color,
          className,
        }}
      />
    );
  } else {
    return (
      <Component
        {...{
          onClickFunc,
          color,
          className,
        }}
      />
    );
  }
};

export default Icon;
