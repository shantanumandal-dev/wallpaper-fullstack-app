import { ReactNode } from "react";

type StudioRootLayoutProps = {
	children: ReactNode;
};

const StudioLayout = ({ children }: Readonly<StudioRootLayoutProps>) => {
	return <main className="mx-auto max-w-7xl px-6 py-3">{children}</main>;
};

export default StudioLayout;
