import React, { useState, useEffect, useRef } from 'react';
import { z } from 'zod';
import useMultiSelectStore from '../../store/useMultiSelectStore';
import { Badge } from '@/components/ui/badge';

const options = [
	{ id: 1, label: 'AACE' },
	{ id: 2, label: 'ABRB' },
	{ id: 3, label: 'ABRC' },
	{ id: 4, label: 'ABRD' },
	{ id: 5, label: 'ABRS' },
	{ id: 6, label: 'ABRU' },
	{ id: 7, label: 'ACCT' },
	{ id: 8, label: 'AFAM' },
	{ id: 9, label: 'AFCS' },
	{ id: 10, label: 'AFRS' },
	{ id: 11, label: 'AMSL' },
	{ id: 12, label: 'ANTH' },
	{ id: 13, label: 'ARAB' },
	{ id: 14, label: 'ARCH' },
	{ id: 15, label: 'ARMY' },
	{ id: 16, label: 'ARTD' },
	{ id: 17, label: 'ARTE' },
	{ id: 18, label: 'ARTF' },
	{ id: 19, label: 'ARTG' },
	{ id: 20, label: 'ARTH' },
	{ id: 21, label: 'ARTS' },
	{ id: 22, label: 'ASNS' },
	{ id: 23, label: 'BINF' },
	{ id: 24, label: 'BIOC' },
	{ id: 25, label: 'BIOE' },
	{ id: 26, label: 'BIOL' },
	{ id: 27, label: 'BIOT' },
	{ id: 28, label: 'BNSC' },
	{ id: 29, label: 'BUSN' },
	{ id: 30, label: 'CAEP' },
	{ id: 31, label: 'CHEM' },
	{ id: 32, label: 'CHME' },
	{ id: 33, label: 'CHNS' },
	{ id: 34, label: 'CINE' },
	{ id: 35, label: 'CIVE' },
	{ id: 36, label: 'CLTR' },
	{ id: 37, label: 'CMMN' },
	{ id: 38, label: 'COMM' },
	{ id: 39, label: 'COOP' },
	{ id: 40, label: 'CRIM' },
	{ id: 41, label: 'CS' },
	{ id: 42, label: 'CSYE' },
	{ id: 43, label: 'CY' },
	{ id: 44, label: 'DA' },
	{ id: 45, label: 'DAMG' },
	{ id: 46, label: 'DEAF' },
	{ id: 47, label: 'DS' },
	{ id: 48, label: 'DSCS' },
	{ id: 49, label: 'DSSH' },
	{ id: 50, label: 'ECNM' },
	{ id: 51, label: 'ECON' },
	{ id: 52, label: 'EDUC' },
	{ id: 53, label: 'EDUT' },
	{ id: 54, label: 'EEAM' },
	{ id: 55, label: 'EEBA' },
	{ id: 56, label: 'EECE' },
	{ id: 57, label: 'EEMB' },
	{ id: 58, label: 'EESC' },
	{ id: 59, label: 'EESH' },
	{ id: 60, label: 'EMGT' },
	{ id: 61, label: 'ENCP' },
	{ id: 62, label: 'ENGL' },
	{ id: 63, label: 'ENGR' },
	{ id: 64, label: 'ENGW' },
	{ id: 65, label: 'ENLR' },
	{ id: 66, label: 'ENSY' },
	{ id: 67, label: 'ENTR' },
	{ id: 68, label: 'ENVR' },
	{ id: 69, label: 'ENVS' },
	{ id: 70, label: 'ESLG' },
	{ id: 71, label: 'EVRN' },
	{ id: 72, label: 'EXED' },
	{ id: 73, label: 'EXRE' },
	{ id: 74, label: 'EXSC' },
	{ id: 75, label: 'FINA' },
	{ id: 76, label: 'FRNH' },
	{ id: 77, label: 'FSEM' },
	{ id: 78, label: 'GAME' },
	{ id: 79, label: 'GBST' },
	{ id: 80, label: 'GE' },
	{ id: 81, label: 'GENS' },
	{ id: 82, label: 'GRMN' },
	{ id: 83, label: 'GSND' },
	{ id: 84, label: 'HBRW' },
	{ id: 85, label: 'HINF' },
	{ id: 86, label: 'HIST' },
	{ id: 87, label: 'HLTH' },
	{ id: 88, label: 'HONR' },
	{ id: 89, label: 'HRMG' },
	{ id: 90, label: 'HSCI' },
	{ id: 91, label: 'HSTY' },
	{ id: 92, label: 'HUSV' },
	{ id: 93, label: 'IA' },
	{ id: 94, label: 'IE' },
	{ id: 95, label: 'INAM' },
	{ id: 96, label: 'INFO' },
	{ id: 97, label: 'INMI' },
	{ id: 98, label: 'INNO' },
	{ id: 99, label: 'INPR' },
	{ id: 100, label: 'INPS' },
	{ id: 101, label: 'INSC' },
];

const selectedOptionsSchema = z
	.array(z.string())
	.max(3, { message: 'You can select a maximum of 3 options.' });

const MultiSelect = () => {
	const { selectedOptions, addOption, removeOption } = useMultiSelectStore();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const handleSelect = option => {
		if (selectedOptions.includes(option.label)) {
			removeOption(option.label);
		} else if (selectedOptions.length < 3) {
			addOption(option.label);
			if (selectedOptions.length + 1 === 3) {
				setIsOpen(false);
			}
		}
	};

	const handleClickOutside = event => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const validationResult = selectedOptionsSchema.safeParse(selectedOptions);

	return (
		<div className="bg-white rounded-lg" ref={dropdownRef}>
			<h6 className="text-md font-md">
				Select courses for recommendation: (Max 3)
			</h6>
			<div className="relative">
				<div
					className="cursor-pointer px-4 py-2 rounded-lg border bg-gray-100"
					onClick={() => setIsOpen(!isOpen)}
				>
					{selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select options'}
				</div>
				{isOpen && (
					<div className="absolute z-10 bg-white border rounded-lg mt-2 w-full max-h-60 overflow-y-auto">
						{options.map(option => (
							<div
								className={`cursor-pointer px-4 py-2 ${selectedOptions.includes(option.label) ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
								key={option.id}
								onClick={() => handleSelect(option)}
							>
								{option.label}
							</div>
						))}
					</div>
				)}
			</div>
			{!validationResult.success && (
				<p className="text-red-500 mt-2 text-sm">
					{validationResult.error.errors[0].message}
				</p>
			)}
		</div>
	);
};

export default MultiSelect;
