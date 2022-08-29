import React from 'react';
import HeaderMenuWhereItem from './headerMenuWhereItem.tool';

interface WherePopupMenuProps {}

const WherePopupMenu: React.FC<
  WherePopupMenuProps
> = ({}: WherePopupMenuProps) => {
  return (
    <div className="relative">
      <div className="w-auto h-auto bg-white absolute left-[230px] rounded-3xl top-2 px-14 py-9 overflow-y-auto">
        <h5 className="font-bold mb-7">Search by region</h5>
        <div className="grid grid-cols-3 gap-4">
          <HeaderMenuWhereItem url="/flexible.jpg" text="I'm flexible" />
          <HeaderMenuWhereItem url="/europe.webp" text="Europe" />
          <HeaderMenuWhereItem url="/italy.webp" text="Italy" />
          <HeaderMenuWhereItem
            url="/southeast_asia.webp"
            text="Southeast Asia"
          />
          <HeaderMenuWhereItem url="/france.webp" text="France" />
          <HeaderMenuWhereItem url="/usa.webp" text="United States" />
        </div>
      </div>
    </div>
  );
};

export default WherePopupMenu;
