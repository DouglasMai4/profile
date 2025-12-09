import { motion } from 'motion/react';

import { Badge } from './ui/badge';

import {
	ArrowUpRight,
	Terminal,
	type LucideIcon,
	GithubIcon,
	LinkedinIcon,
	MessageCircleIcon,
	SendIcon,
	MailIcon,
} from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';

type ContactItem = {
	name: string;
	description: string;
	value: string;
	link: string;
	Icon: LucideIcon;
	color: string;
	bgHover: string;
	borderHover: string;
	shadow: string;
};

export function Contact() {
	const { t } = useTranslation();

	const contacts: ContactItem[] = [
		{
			name: 'WhatsApp',
			description: t('contact.items.whatsapp'),
			value: '+55 47 99769-4522',
			link: 'https://wa.me/5547997694522',
			Icon: MessageCircleIcon,
			color: 'text-emerald-500',
			bgHover: 'group-hover:bg-emerald-500/10',
			borderHover: 'group-hover:border-emerald-500/50',
			shadow: 'group-hover:shadow-emerald-500/20',
		},
		{
			name: 'LinkedIn',
			description: t('contact.items.linkedin'),
			value: 'in/douglasmai4',
			link: 'https://linkedin.com/in/douglasmai4',
			Icon: LinkedinIcon,
			color: 'text-blue-500',
			bgHover: 'group-hover:bg-blue-500/10',
			borderHover: 'group-hover:border-blue-500/50',
			shadow: 'group-hover:shadow-blue-500/20',
		},
		{
			name: 'GitHub',
			description: t('contact.items.github'),
			value: 'douglasmai4',
			link: 'https://github.com/douglasmai4',
			Icon: GithubIcon,
			color: 'text-gray-500',
			bgHover: 'group-hover:bg-gray-500/10',
			borderHover: 'group-hover:border-gray-500/50',
			shadow: 'group-hover:shadow-gray-500/20',
		},
		{
			name: 'Telegram',
			description: t('contact.items.telegram'),
			value: '@douglasmai4',
			link: 'https://t.me/douglasmai4',
			Icon: SendIcon,
			color: 'text-sky-500',
			bgHover: 'group-hover:bg-sky-500/10',
			borderHover: 'group-hover:border-sky-500/50',
			shadow: 'group-hover:shadow-sky-500/20',
		},
		{
			name: 'Email',
			description: t('contact.items.email'),
			value: 'contato@douglasmaia.dev.br',
			link: 'mailto:contato@douglasmaia.dev.br',
			Icon: MailIcon,
			color: 'text-zinc-200',
			bgHover: 'group-hover:bg-zinc-500/10',
			borderHover: 'group-hover:border-zinc-500/50',
			shadow: 'group-hover:shadow-zinc-500/20',
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1 },
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section
			id="contact"
			className="py-24 px-4 relative bg-background overflow-hidden flex flex-col justify-between min-h-[60vh]"
		>
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

			<div className="container mx-auto max-w-5xl relative z-10">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex flex-col items-center mb-16 text-center space-y-6"
				>
					<Badge
						variant="outline"
						className="px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20 backdrop-blur-md"
					>
						<Terminal className="w-4 h-4 mr-2" />
						{t('contact.badge')}
					</Badge>

					<h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tight">
						<Trans
							i18nKey="contact.title"
							components={{
								1: <br />,
								2: <span className="text-primary" />,
							}}
						/>
					</h2>

					<p className="text-muted-foreground text-lg max-w-xl">
						<Trans
							i18nKey="contact.description"
							components={{
								1: <strong />,
							}}
						/>
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-6"
				>
					{contacts.map((contact) => {
						const Icon = contact.Icon;

						return (
							<motion.a
								key={contact.name}
								href={contact.link}
								target="_blank"
								rel="noopener noreferrer"
								variants={itemVariants}
								className={`group relative p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${contact.bgHover} ${contact.borderHover} ${contact.shadow} ${contacts.length % 2 !== 0 && 'md:last:col-span-2'}`}
							>
								<div className="flex items-center justify-between mb-4">
									<div
										className={`p-3 rounded-xl bg-white/5 ${contact.color} group-hover:scale-110 transition-transform duration-500`}
									>
										<Icon className="w-6 h-6" />
									</div>
									<ArrowUpRight
										className={`w-5 h-5 text-zinc-500 group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300`}
									/>
								</div>

								<div>
									<h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-white transition-colors">
										{contact.name}
									</h3>
									<p className="text-sm text-zinc-500 mb-4 group-hover:text-zinc-400">
										{contact.description}
									</p>
									<p className="font-mono text-xs text-primary/80 bg-primary/5 inline-block px-2 py-1 rounded border border-primary/10 group-hover:bg-primary/10 transition-colors">
										{contact.value}
									</p>
								</div>
							</motion.a>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
