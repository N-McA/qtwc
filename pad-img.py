
import argparse
from pathlib import Path
from skimage.io import imread, imsave
import numpy as np
import scipy.ndimage.filters


parser = argparse.ArgumentParser(description='Pad Image')
parser.add_argument('img', type=Path)
args = parser.parse_args()

img = imread(args.img)

top_row = np.expand_dims(img[0], 0)

rows = []
for _ in range(1000):
    rows.append(top_row)
    top_row = scipy.ndimage.filters.gaussian_filter1d(top_row, 1, axis=1)

padding = np.concatenate(list(reversed(rows)), 0)

print(padding.shape)

padded_img = np.concatenate([padding, img], 0)

imsave('test.jpg', padded_img)
