export function shallowEqualArrays(arrA: unknown[], arrB: unknown[]): boolean {
  if (arrA === arrB) {
    return true;
  }
  if (!arrA || !arrB) {
    return false;
  }
  const len = arrA.length;
  if (arrB.length !== len) {
    return false;
  }
  for (let i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
}

export const normalizeFilmData = {
  getImgUrl(
    {url, previewUrl}: { url?: string, previewUrl?: string },
    {firstTry}: { firstTry: 'url' | 'previewUrl' } = {firstTry: "url"}
  ) {
    if (firstTry === 'url') return url ?? previewUrl ?? ''
    if (firstTry === 'previewUrl') return previewUrl ?? url ?? ''
  },

  getDescription({description, shortDescription}: {
    description?: string,
    shortDescription?: string
  }) {
    return description ?? shortDescription ?? 'No description at all';
  },

  getName({name, alternativeName, enName}: {
    name?: string,
    alternativeName?: string,
    enName?: string
  }) {
    return name ?? alternativeName ?? enName ?? 'Film name is missing';
  },
}


