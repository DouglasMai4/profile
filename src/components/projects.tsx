import { motion } from 'motion/react';

import { Badge } from './ui/badge';
import { Button, buttonVariants } from './ui/button';
import { Card, CardContent } from './ui/card';

import { ExternalLink, Lock, Loader2, FolderGit, Play } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';

interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	tags: string[];
	links: {
		demo?: string;
		repo?: string;
	};
	isPrivate: boolean;
	status: 'completed' | 'in-progress';
}

export function Projects() {
	const { t } = useTranslation();

	const projects: Project[] = [
		{
			id: '1',
			title: 'Pulse Guard',
			description: t('projects.items.pulseGuard'),
			image: '/pulse-guard.png',
			tags: ['React', 'TypeScript', 'Hono', 'Bun'],
			links: {
				repo: 'https://github.com/douglasmai4/pulse-guard',
			},
			isPrivate: false,
			status: 'in-progress',
		},
		{
			id: '2',
			title: 'Wilo AI',
			description: t('projects.items.wilo'),
			image: '/wilo-ai.png',
			tags: ['React', 'Node.js', 'Express', 'Python', 'Docker'],
			links: {
				demo: 'https://lp.appwilo.com',
			},
			isPrivate: true,
			status: 'completed',
		},
		{
			id: '3',
			title: 'Kingdom Forge',
			description: t('projects.items.forge'),
			image: '/kingdom-softwares.png',
			tags: ['React', 'Bun', 'Hono', 'Redis'],
			links: {
				demo: 'https://kingdomsoftwares.com.br',
			},
			isPrivate: true,
			status: 'in-progress',
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2 },
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<section
			id="projects"
			className="py-24 px-4 bg-background relative overflow-hidden"
		>
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="container mx-auto max-w-6xl relative z-10">
				<div className="flex flex-col items-center mb-16 space-y-4 text-center">
					<Badge
						variant="outline"
						className="px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20 backdrop-blur-md"
					>
						<FolderGit className="w-4 h-4 mr-2" />
						{t('projects.badge')}
					</Badge>
					<h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight text-foreground">
						<Trans
							i18nKey="projects.title"
							components={{
								1: <span className="text-primary" />,
							}}
						/>
					</h2>
					<p className="text-muted-foreground max-w-2xl text-lg">
						{t('projects.description')}
					</p>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{projects.map((project) => (
						<motion.div key={project.id} variants={cardVariants}>
							<Card className="group h-full bg-zinc-900/40 border-white/5 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
								<div className="relative h-48 overflow-hidden mx-4 rounded-md border shadow">
									<div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-60" />

									<img
										src={project.image}
										alt={project.title}
										loading="lazy"
										decoding="async"
										className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
									/>

									<div className="absolute top-3 right-3 z-20">
										{project.status === 'in-progress' ? (
											<Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 backdrop-blur-md">
												<Loader2 className="w-3 h-3 mr-1 animate-spin" />
												{t('projects.inDevelopment')}
											</Badge>
										) : (
											<Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 backdrop-blur-md">
												{t('projects.completed')}
											</Badge>
										)}
									</div>
								</div>

								<CardContent className="p-6 flex-1 flex flex-col">
									<div className="flex-1 space-y-3">
										<div className="flex justify-between items-start">
											<h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
												{project.title}
											</h3>
											{project.isPrivate && (
												<div className="tooltip" title="Código Privado">
													<Lock className="w-4 h-4 text-muted-foreground/50" />
												</div>
											)}
										</div>

										<p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
											{project.description}
										</p>
									</div>

									<div className="mt-6 space-y-4">
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag) => (
												<span
													key={tag}
													className="text-xs px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/5 group-hover:border-primary/20 group-hover:text-zinc-300 transition-colors"
												>
													{tag}
												</span>
											))}
										</div>

										<div className="pt-4 border-t border-white/5 flex items-center gap-3">
											{project.links.demo && (
												<Button
													size="sm"
													className="flex-1 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 transition-all"
													asChild
												>
													<a
														href={project.links.demo}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Play className="w-4 h-4 mr-2" />
														{t('projects.test')}
													</a>
												</Button>
											)}

											{project.isPrivate ? (
												<div className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground bg-zinc-800/50 rounded-md border border-white/5 cursor-not-allowed opacity-70">
													<Lock className="w-4 h-4" />
													<span>{t('projects.private')}</span>
												</div>
											) : (
												<Button
													variant="outline"
													size="sm"
													className="flex-1 border-white/10 hover:bg-white/5 hover:text-white"
													asChild
												>
													<a
														href={project.links.repo}
														target="_blank"
														rel="noopener noreferrer"
													>
														<svg
															role="img"
															viewBox="0 0 24 24"
															xmlns="http://www.w3.org/2000/svg"
															className="w-4 h-4 mr-2"
															fill="currentColor"
														>
															<title>GitHub</title>
															<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
														</svg>
														{t('projects.code')}
													</a>
												</Button>
											)}
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					className="mt-16 text-center"
				>
					<a
						href="https://github.com/douglasmai4"
						className={buttonVariants({
							variant: 'link',
							className:
								'text-muted-foreground hover:text-primary transition-colors',
						})}
					>
						{t('projects.seeGithub')} <ExternalLink className="w-4 h-4 ml-2" />
					</a>
				</motion.div>
			</div>
		</section>
	);
}
