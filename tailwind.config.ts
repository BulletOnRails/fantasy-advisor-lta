
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				lta: {
					'blue': '#3b82f6',
					'blue-light': '#60a5fa',
					'blue-dark': '#1e3a8a',
					'blue-darker': '#1e40af',
					'blue-darker-light': '#bfdbfe',
					'blue-darker-dark': '#1e3a8a',
					'green': '#22c55e',
					'green-light': '#86efac',
					'green-dark': '#166534',
					'greendarker': '#047857',
					'red': '#ef4444',
					'red-light': '#fca5a1',
					'red-dark': '#991b1b',
					'red-darker': '#7f1d1d',
					'yellow': '#eab308',
					'purple': '#8b5cf6',
					'purple-light': '#a78bfa',
					'purple-dark': '#4c1d95',
					'purple-darker': '#7e22ce',
					'orange-light': '#fdba74',
					'orange-dark': '#c2410c',
					'orange-darker': '#9a3412',
					'orange-lighter': '#f97316',
					'orange-lighter-light': '#fdba74',
					'orange-lighter-dark': '#c2410c',
					'orange': '#f97316',
					'teal': '#14b8a6',
					'teal-light': '#2dd4bf',
					'pink': '#ec4899',
					'gray': '#374151',
					'gray-light': '#f3f4f6',
					'gray-dark': '#111827',
					'gray-darker': '#1f2937',
					'gray-darkest': '#111827',
					'gray-lightest': '#f9fafb',
					'gray-lighter': '#e5e7eb',
					'gray-lighter-light': '#f3f4f6',
					'gray-lighter-dark': '#374151',

				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
