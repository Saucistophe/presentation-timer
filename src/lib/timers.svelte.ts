let params = new URLSearchParams(window.location.search).getAll('timer');
if (!params?.length ) params = ['5'];
console.log(params);

export const timers: number[] = $state(params.map((z) => parseInt(z)));
