// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, bases) => {
  return {
    specimenNum: number,
    dna: bases,
    mutate() {
      const index = Math.floor(Math.random() * this.dna.length);
      const oldBase = this.dna[index];
      do {
        this.dna[index] = returnRandBase();
      } while (this.dna[index] === oldBase);
    },
    compareDNA(otherPAequor) {
      let repeats = 0;
      for (let i = 0; i < otherPAequor.dna.length; i++) {
        if (otherPAequor.dna[i] === this.dna[i]) repeats++;
      }
      const percentCoincidence = Math.round((repeats / this.dna.length) * 100);
      console.log(
        `specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentCoincidence}% DNA in common`
      );
      return percentCoincidence;
    },
    willLikelySurvive() {
      let cytosineAndGuanineQuantity = 0;
      for (base in this.dna) {
        if (this.dna[base] === 'C' || this.dna[base] === 'G')
          cytosineAndGuanineQuantity++;
      }
      const cytosineAndGuaninePercent = Math.round(
        (cytosineAndGuanineQuantity / this.dna.length) * 100
      );
      if (cytosineAndGuaninePercent >= 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand() {
      const complement = [];
      for (base in this.dna) {
        switch (this.dna[base]) {
          case 'A':
            complement.push('T');
            break;
          case 'T':
            complement.push('A');
            break;
          case 'C':
            complement.push('G');
            break;
          case 'G':
            complement.push('C');
            break;
        }
      }
      return complement;
    },
  };
};

const createSurvivors = (quantity) => {
  const survivorInstances = [];
  let instance;
  let index = 1;
  while (survivorInstances.length < quantity) {
    instance = pAequorFactory(index, mockUpStrand());
    if (instance.willLikelySurvive()) survivorInstances.push(instance);
    index++;
  }
  return survivorInstances;
};

const mostRelatedInstances = (instances) => {
  const mostRelated = {
    firstInstance: '',
    secondInstance: '',
    percentRelated: 0,
  };
  for (let i = 0; i < instances.length; i++) {
    for (let j = i; j < instances.length; j++) {
      if (
        instances[i].compareDNA(instances[j]) > mostRelated.percentRelated &&
        i !== j
      ) {
        mostRelated.firstInstance = `${instances[i].specimenNum}`;
        mostRelated.secondInstance = `${instances[j].specimenNum}`;
        mostRelated.percentRelated = instances[i].compareDNA(instances[j]);
      }
    }
  }
  return mostRelated;
};

// const test1 = pAequorFactory(1, mockUpStrand());
// console.log(test1.dna);
// console.log(test1.complementStrand());
// const test2 = pAequorFactory(2, mockUpStrand());
// console.log(test2);
// test1.compareDNA(test2);
// const multipleInstances = createSurvivors(30);
// console.log(mostRelatedInstances(multipleInstances));
