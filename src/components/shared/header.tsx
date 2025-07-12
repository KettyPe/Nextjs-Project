import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, SearchInput } from "@/components/shared";
import { Button } from "@/components/ui";
import { User } from "lucide-react";
import { CartButton } from "@/components/shared/cart/cart-button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
              <p className="text-sm leading-3 text-gray-400">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-3">
            <User size={16} />
            Войти
          </Button>

          <CartButton/>
        </div>
      </Container>
    </header>
  );
};
