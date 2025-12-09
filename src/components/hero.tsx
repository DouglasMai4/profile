import { motion } from 'motion/react';

import { Trans, useTranslation } from 'react-i18next';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { EncryptedText } from './ui/encrypted-text';
import { ParticleAnimation } from './ui/particle-animation';

import { TerminalIcon, Code2, ArrowRight } from 'lucide-react';

export function Hero() {
	const { t } = useTranslation();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section
			id="hero"
			className="relative px-4 h-dvh flex items-center justify-center bg-background"
		>
			<div className="absolute inset-0 z-0">
				<ParticleAnimation />

				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-background/0 to-background" />
				<div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background" />
			</div>

			<div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="space-y-8 text-center lg:text-left order-2 lg:order-1"
				>
					<motion.div
						variants={itemVariants}
						className="flex justify-center lg:justify-start"
					>
						<Badge
							variant="outline"
							className="px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/30 backdrop-blur-md"
						>
							<Code2 className="w-4 h-4 mr-2 animate-pulse" />
							<EncryptedText text={t('hero.badge')} revealDelayMs={50} />
						</Badge>
					</motion.div>

					<motion.h1
						variants={itemVariants}
						className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight text-foreground"
					>
						<Trans
							i18nKey="hero.title"
							components={{
								1: <GradientText />,
							}}
						/>
					</motion.h1>

					<motion.p
						variants={itemVariants}
						className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
					>
						{t('hero.description')}
					</motion.p>

					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
					>
						<Button
							size="lg"
							className="group text-base relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
							asChild
						>
							<a href="#projects">
								{t('hero.explore')}
								<ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
							</a>
						</Button>

						<Button
							size="lg"
							variant="outline"
							className="group border-primary/20 hover:bg-primary/5 hover:border-primary/50"
							asChild
						>
							<a href="#contact">
								{t('hero.talk')}
								<TerminalIcon className="ml-2 w-4 h-4 text-primary" />
							</a>
						</Button>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					className="order-1 lg:order-2 flex justify-center lg:justify-end mt-72 lg:mt-0"
				>
					<motion.div
						animate={{ y: [0, -15, 0] }}
						transition={{
							duration: 4,
							repeat: Infinity,
							repeatType: 'reverse',
							ease: 'easeInOut',
						}}
						className="relative"
					>
						<div className="absolute -inset-1 bg-linear-to-r from-primary/30 to-green-500/30 rounded-xl blur-xl opacity-50 animate-pulse" />

						<div className="relative bg-zinc-950/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl w-full max-w-md">
							<div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
								<div className="flex gap-2">
									<div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
									<div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
									<div className="w-3 h-3 rounded-full bg-green-500/80 shadow-sm" />
								</div>
								<div className="flex-1 text-center text-xs font-mono text-zinc-500 flex items-center justify-center gap-1.5 opacity-70">
									<TerminalIcon className="w-3 h-3" />
									developer.ts
								</div>
							</div>

							<div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
								<div className="flex">
									<span className="text-zinc-600 select-none mr-4 text-right w-6">
										1
									</span>
									<div>
										<span className="text-purple-400">const</span>{' '}
										<span className="text-yellow-200">developer</span>{' '}
										<span className="text-zinc-400">=</span>{' '}
										<span className="text-zinc-400">{`{`}</span>
									</div>
								</div>

								<div className="flex group hover:bg-white/5 transition-colors rounded px-[-1rem]">
									<span className="text-zinc-600 select-none mr-4 text-right w-6">
										2
									</span>
									<div className="pl-4">
										<span className="text-sky-300">name</span>:
										<span className="text-emerald-400"> 'Douglas V. Maia'</span>
										,
									</div>
								</div>

								<div className="flex group hover:bg-white/5 transition-colors rounded">
									<span className="text-zinc-600 select-none mr-4 text-right w-6">
										3
									</span>
									<div className="pl-4">
										<span className="text-sky-300">skills</span>: [
										<span className="text-orange-400">'React'</span>,{' '}
										<span className="text-orange-400">'Node'</span>,{' '}
										<span className="text-orange-400">'Next'</span>],
									</div>
								</div>

								<div className="flex group hover:bg-white/5 transition-colors rounded">
									<span className="text-zinc-600 select-none mr-4 text-right w-6">
										4
									</span>
									<div className="pl-4">
										<span className="text-sky-300">hardWorker</span>:
										<span className="text-blue-400"> true</span>,
									</div>
								</div>

								<div className="flex group hover:bg-white/5 transition-colors rounded">
									<span className="text-zinc-600 select-none mr-4 text-right w-6">
										5
									</span>
									<div className="pl-4">
										<span className="text-sky-300">start</span>:
										<span className="text-purple-400"> ()</span>
										<span className="text-purple-400">{' =>'}</span>
										<span className="text-zinc-400"> {`{`}</span>
									</div>
								</div>

								<div className="flex group hover:bg-white/5 transition-colors rounded">
									<span className="text-zinc-600 select-none mr-4 text-right w-6">
										6
									</span>
									<div className="pl-8">
										<span className="text-red-300">return</span>
										<span className="text-emerald-400">
											{' '}
											'{t('hero.terminal.return')}'
										</span>
									</div>
								</div>

								<div className="flex">
									<span className="text-zinc-600 select-none mr-4 text-right w-6">
										7
									</span>
									<div className="pl-4">
										<span className="text-zinc-400">{`}`}</span>
									</div>
								</div>

								<div className="flex">
									<span className="text-zinc-600 select-none mr-4 text-right w-6">
										8
									</span>
									<div>
										<span className="text-zinc-400">{`}`}</span>
										<span className="text-zinc-500 animate-pulse">|</span>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

function GradientText({ children }: { children?: React.ReactNode }) {
	return (
		<span className="transparent relative">
			<span className="bg-clip-text text-transparent bg-linear-to-r from-primary via-green-400 to-emerald-500">
				{children}
			</span>
		</span>
	);
}
