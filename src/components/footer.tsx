import { motion } from 'motion/react';

import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
	const { t } = useTranslation();

	return (
		<motion.footer
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			className="container mx-auto max-w-5xl relative z-10 mt-24 p-8 border-t border-white/5"
		>
			<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
				<p className="font-mono">
					© {new Date().getFullYear()} Douglas Maia. {t('footer.allRights')}
				</p>

				<div className="flex items-center gap-2">
					<span>{t('footer.developedWith')}</span>
					<Heart className="w-4 h-4 text-emerald-500 animate-pulse" />
					<span>{t('footer.andCoffee')}</span>
				</div>
			</div>
		</motion.footer>
	);
}
