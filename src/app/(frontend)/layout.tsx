import { ReactNode } from "react";

type FrontendRootLayoutProps = {
	children: ReactNode;
};

const FrontendLayout = ({ children }: Readonly<FrontendRootLayoutProps>) => {
	return <main className="mx-auto max-w-7xl px-6 py-3">{children}</main>;
};

export default FrontendLayout;
