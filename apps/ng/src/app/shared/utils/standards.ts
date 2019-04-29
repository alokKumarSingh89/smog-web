export interface RangeElem {
  min?: number;
  max?: number;
  value: number;
}

export const PM10Standards: RangeElem[] = [
  {
    min: 0,
    max: 21,
    value: 1
  },
  {
    min: 21,
    max: 61,
    value: 2
  },
  {
    min: 61,
    max: 101,
    value: 3
  },
  {
    min: 101,
    max: 141,
    value: 4
  },
  {
    min: 141,
    max: 201,
    value: 5
  },
  {
    min: 201,
    max: null,
    value: 6
  },
];

export const PM25Standards: RangeElem[] = [
  {
    min: 0,
    max: 13,
    value: 1
  },
  {
    min: 13,
    max: 37,
    value: 2
  },
  {
    min: 37,
    max: 61,
    value: 3
  },
  {
    min: 61,
    max: 85,
    value: 4
  },
  {
    min: 85,
    max: 121,
    value: 5
  },
  {
    min: 121,
    max: null,
    value: 6
  },
];

export interface AirQualityValue {
  date: Date,
  pm10?: number;
  pm25?: number;
}

export function getPM10Index(value: number): number {
  if(!value || value < 0)

  if (!value || value < 0) {
    return null;
  } else if (value >= 0 && value <= 20) {
    return 1;
  } else if (value > 20 && value <= 60) {
    return 2;
  } else if (value > 60 && value <= 100) {
    return 3;
  } else if (value > 100 && value <= 140) {
    return 4;
  } else if (value > 140 && value <= 200) {
    return 5;
  } else if (value > 200) {
    return 6;
  }
}

export function getPM25Index(value: number): number {
  if (!value || value < 0) {
    return null;
  } else if (value >= 0 && value <= 12) {
    return 1;
  } else if (value > 12 && value <= 36) {
    return 2;
  } else if (value > 36 && value <= 60) {
    return 3;
  } else if (value > 60 && value <= 84) {
    return 4;
  } else if (value > 84 && value <= 120) {
    return 5;
  } else if (value > 120) {
    return 6;
  }
}

export function getOverallIJP(data: AirQualityValue): number {
  const pm10 = getPM10Index(data.pm10);
  const pm25 = getPM25Index(data.pm25);

  if (!pm10) {
    console.log('pm10', data);
  }

  if (!pm25) {
    console.log('pm25', data);
  }
  return Math.max(pm10, pm25);
}

export function analysePeriod(values: AirQualityValue[]) {
  const indexes: number[] = [];
  values.forEach(value => {
    const index = getOverallIJP(value);
    if (!index) {
      console.log(value);
    }
    indexes.push(index);
  });

  const counts = {};

  for (var i = 0; i < indexes.length; i++) {
    var num = indexes[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  console.log(counts);
}
