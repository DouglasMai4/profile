import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
	Home,
	User,
	FolderGit,
	MessageCircle,
	Languages,
	Code2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '@/hooks/use-mobile';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { availableLangs } from '@/utils/i18n';
import { Drawer, DrawerContent, DrawerTrigger } from './ui/drawer';

export function Navbar() {
	const [activeSection, setActiveSection] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	const { t } = useTranslation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);

			const sections = ['hero', 'about', 'projects', 'contact'];
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top >= 0 && rect.top <= 300;
				}
				return false;
			});
			if (current) setActiveSection(current);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems = useRef([
		{ name: t('navbar.home'), href: '#hero', id: 'hero', icon: Home },
		{ name: t('navbar.about'), href: '#about', id: 'about', icon: User },
		{
			name: t('navbar.projects'),
			href: '#projects',
			id: 'projects',
			icon: FolderGit,
		},
		{
			name: t('navbar.contact'),
			href: '#contact',
			id: 'contact',
			icon: MessageCircle,
		},
	]);

	const scrollToSection = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setActiveSection(href.replace('#', ''));
		}
	};

	return (
		<motion.header
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
			className="sticky md:fixed bottom-4 md:top-4 md:bottom-auto inset-x-0 z-50 flex justify-center pointer-events-none px-4"
		>
			<div
				className={cn(
					'pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border transition-all duration-300 shadow-lg shadow-primary/5',
					scrolled
						? 'bg-zinc-900/80 border-white/10 backdrop-blur-xl'
						: 'bg-zinc-900/50 border-white/5 backdrop-blur-md',
				)}
			>
				<div className="hidden md:flex items-center px-3 py-2 text-primary font-mono font-bold mr-2 border-r border-white/10">
					<Code2 className="w-5 h-5" />
				</div>

				<nav className="flex items-center gap-1">
					{navItems.current.map((item) => {
						const Icon = item.icon;
						const isActive = activeSection === item.id;

						return (
							<a
								key={item.name}
								href={item.href}
								onClick={(e) => scrollToSection(e, item.href)}
								className={cn(
									'relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2',
									isActive
										? 'text-primary-foreground'
										: 'text-muted-foreground hover:text-foreground',
								)}
							>
								{isActive && (
									<motion.div
										layoutId="active-pill"
										className="absolute inset-0 bg-primary rounded-full -z-10"
										transition={{ type: 'spring', stiffness: 300, damping: 30 }}
									/>
								)}

								<Icon className="w-4 h-4 relative z-10" />
								<span className="hidden md:block relative z-10">
									{item.name}
								</span>
							</a>
						);
					})}
				</nav>

				<div className="w-px h-6 bg-white/10 mx-1" />

				<LanguageSelector>
					<Button
						className="relative p-2 rounded-full hover:bg-white/5 transition-colors group"
						variant="ghost"
					>
						<Languages className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
						<span className="absolute -top-1 -right-1 flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
							<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
						</span>
					</Button>
				</LanguageSelector>
			</div>
		</motion.header>
	);
}

function LanguageSelector({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	const { i18n } = useTranslation();

	const isMobile = useIsMobile();

	if (isMobile) {
		return (
			<Drawer open={isOpen} onOpenChange={setIsOpen}>
				<DrawerTrigger asChild>{children}</DrawerTrigger>
				<DrawerContent className="bg-zinc-900/80 border-white/10 backdrop-blur-xl mt-4">
					<div className="flex flex-col gap-4 p-4">
						{availableLangs.map((language) => (
							<Button
								key={language.lang}
								variant="outline"
								onClick={() => {
									i18n.changeLanguage(language.lang);
									setIsOpen(false);
								}}
							>
								<img
									src={language.flag}
									alt={language.title}
									className="w-6 h-6 mr-2 rounded-md"
								/>

								{language.title}
							</Button>
						))}
					</div>
				</DrawerContent>
			</Drawer>
		);
	}

	return (
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-zinc-900/80 border-white/10 backdrop-blur-xl mt-4">
				{availableLangs.map((language) => (
					<DropdownMenuItem
						key={language.lang}
						onClick={() => {
							i18n.changeLanguage(language.lang);
							setIsOpen(false);
						}}
					>
						<img
							src={language.flag}
							alt={language.title}
							className="w-6 h-6 mr-2 rounded-md"
						/>

						{language.title}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
