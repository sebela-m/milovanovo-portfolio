import React from 'react';

import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className = "flex w-full pb-4 pt-8 justify-center align-center bg-zinc-400">
            <h3 className = "text-white leading-5 flex text-[0.2rem]">Copyright </h3>
            <span className = "text-amber-100 leading-5 text-base">&nbsp;©&nbsp;</span>
            <h3 className = "text-amber-200 leading-5 flex text-[0.2rem]"> 2022</h3>
            <h3 className = "text-amber-100 leading-5 flex text-[0.2rem]">,&nbsp;</h3>
            <h3 className = "text-white leading-5 flex text-[0.2rem]">{t('footer.copyright')}</h3>
        </div>
    );
}

export default Footer;