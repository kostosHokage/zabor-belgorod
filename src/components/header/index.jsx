import './index.scss';
import React from 'react';
import Link from 'next/link';
import Button from "@/components/Button";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <div className="logo-content">
                    <img src="/images/logo.svg" alt="" />
                    <span className="logo-content__title">Заборы <br /> в Белгороде</span>
                </div>
                <div className="logo-worktime">
                    <span>Время работы с 09:00 до 20:00</span>
                </div>
            </div>

            <div className="nav">
                <div className="nav-item">
                    <Link href="/fences">
                        <span>Заборы</span>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link href="/gates">
                        <span>Ворота</span>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link href="/canopies">
                        Навесы
                    </Link>
                </div>
                <div className="nav-item">
                    <Link href="/materials">
                        <span>Материалы</span>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link href="/company">
                        <span>Компания</span>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link href="/contacts">
                        <span>Контакты</span>
                    </Link>
                </div>
            </div>

            <div className="callme">
                <div className="callme-contacts">
                    <span>golovinroman797@mail.ru</span>
                    <span>8 (905) 678-93-08</span>
                </div>
                <Button title="Перезвоните мне" />
            </div>
        </div>
    );
};

export default Header;
