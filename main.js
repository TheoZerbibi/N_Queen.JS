const readline = require('readline-sync');
const tab = readline.question("Entrer des nombres de dames (min 4): ");

main(tab);

function map(tab)
{
	let newTAB = new Array(tab);
	let i = 0;
	let j = 0;

	while (i != newTAB.length)
	{
		newTAB[i] = new Array(tab);
		i++;
	}
	while (j < tab)
	{
		i = 0;
		while (i < tab)
		{
			newTAB[j][i] = 0;
			i++;
		}
		j++;
	}
	return (newTAB);
}

function check_vertical(tab, size)
{
	return (0);
}

function check_horizontal(tab, size)
{
	return (0);
}

function check_diagonal(tab, size)
{
	return (0);
}

function solve(tab, size)
{
	if ((check_horizontal(tab, size) + check_vertical(tab, size) + check_diagonal(tab, size)) == 0)
		console.log(check_horizontal(tab, size));
	return (tab);
}

function main(tab)
{
	let nTab;
	if (tab < 4)
	{
		console.log("Error : Minimum 4");
		return ;
	}
	nTab = map(Number(tab));
	nTab = solve(nTab, tab);
	/*console.log(`\nNum ${nbr}\n`);
	console.log(tab);*/
}