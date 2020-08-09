---
title: 'Image Processing in Python 🧐 '
date: 2020-04-07 17:21:13
category: 'development'
thumbnail: './images/pic1.jpeg'
draft: false
---

![](./images/pic1.jpeg)

### This story was reposted by Level Up Coding

It has never as easy as to take a picture. All you need is a mobile phone. These are the bare essentials to shoot and to view an image. Taking a photograph is free, if we don’t take the costs for the mobile phone into considerations. Just a generation ago, hobby artists and real artists needed special and often expensive and the costs per picture were far from being free.
We take pictures to preserve great moments in time. Pickled memories ready to be “opened” in the future at will.
Similar to pickling things, we have to pay attention to the right preservatives. Of course, mobile phones also provide us with a range of image processing software, but as soon as we need to manipulate a huge quantity of photographs we need other tools. This is when programming and Python come into play. Python and its modules like Numpy, Scipy, Matplotlib and other special modules provide the optimal functionality to be able to cope with the flood of pictures.
To provide you with the necessary knowledge this chapter of our Python tutorial deals with basic image processing and manipulation. For this purpose, we use the modules NumPy, Matplotlib and SciPy.
We start with the scipy package misc. The helpfile says that scipy.misc contains “various utilities that don’t have another home”.

```
# the following line is only necessary in Python notebook:
%matplotlib inline
from scipy import misc
ascent = misc.ascent()
import matplotlib.pyplot as plt
plt.gray()
plt.imshow(ascent)
plt.show()
```

Additionally to the image, we can see the axis with the ticks. This may be very interesting, if you need some orientations about the size and the pixel position, but in most cases, you want to see the image without this information. We can get rid of the ticks and the axis by adding the command plt.axis("off"):

```
from scipy import misc
ascent = misc.ascent()
import matplotlib.pyplot as plt
plt.axis("off") # removes the axis and the ticks
plt.gray()
plt.imshow(ascent)
plt.show()
```

We can see that the type of this image is an integer array:

```
ascent.dtype
```

Output::

```
dtype('int64')
```

We can also check the size of the image:

```
ascent.shape
```

Output::

```
(512, 512)
```

The misc package contains an image of a racoon as well:

```
import scipy.misc
face = scipy.misc.face()
print(face.shape)
print(face.max)
print(face.dtype)
plt.axis("off")
plt.gray()
plt.imshow(face)
plt.show()
(768, 1024, 3)
<built-in method max of numpy.ndarray object at 0x7f9e70102800>
uint8
import matplotlib.pyplot as plt
```

Only png images are supported by matplotlib

```
img = plt.imread('frankfurt.png')
print(img[:3])
[[[ 0.41176471  0.56862748  0.80000001]
  [ 0.40392157  0.56078434  0.79215688]
  [ 0.40392157  0.56862748  0.79607844]
  ...,
  [ 0.48235294  0.62352943  0.81960785]
  [ 0.47843137  0.627451    0.81960785]
  [ 0.47843137  0.62352943  0.82745099]]
 [[ 0.40784314  0.56470591  0.79607844]
  [ 0.40392157  0.56078434  0.79215688]
  [ 0.40392157  0.56862748  0.79607844]
  ...,
  [ 0.48235294  0.62352943  0.81960785]
  [ 0.47843137  0.627451    0.81960785]
  [ 0.48235294  0.627451    0.83137256]]
 [[ 0.40392157  0.56862748  0.79607844]
  [ 0.40392157  0.56862748  0.79607844]
  [ 0.40392157  0.56862748  0.79607844]
  ...,
  [ 0.48235294  0.62352943  0.81960785]
  [ 0.48235294  0.62352943  0.81960785]
  [ 0.48627451  0.627451    0.83137256]]]
plt.axis("off")
imgplot = plt.imshow(img)
lum_img = img[:,:,1]
print(lum_img)
[[ 0.56862748  0.56078434  0.56862748 ...,  0.62352943  0.627451
   0.62352943]
 [ 0.56470591  0.56078434  0.56862748 ...,  0.62352943  0.627451    0.627451  ]
 [ 0.56862748  0.56862748  0.56862748 ...,  0.62352943  0.62352943
   0.627451  ]
 ...,
 [ 0.31764707  0.32941177  0.32941177 ...,  0.30588236  0.3137255
   0.31764707]
 [ 0.31764707  0.3137255   0.32941177 ...,  0.3019608   0.32156864
   0.33725491]
 [ 0.31764707  0.3019608   0.33333334 ...,  0.30588236  0.32156864
   0.33333334]]
plt.axis("off")
imgplot = plt.imshow(lum_img)
```

### Tint, Shade and Tone

Now, we will show how to tint an image. Tint is an expression from colour theory and an often used technique by painters. Thinking about painters and not think about the Netherlands is hard to imagine. So we will use a picture with Dutch windmills in our next example. (The image has been taken at Kinderdijk, a village in the Netherlands, about 15 km east of Rotterdam and about 50 kilometres from Den Haag (The Hague). It’s a UNESCO World Heritage Site since 1997.)

```
windmills = plt.imread('windmills.png')
plt.axis("off")
plt.imshow(windmills)
```

Output::

```
<matplotlib.image.AxesImage at 0x7f9e77f02f98>
```

We want to tint the image now. This means we will “mix” our colours with white. This will increase the lightness of our image. For this purpose, we write a Python function, which takes an image and a percentage value as a parameter. Setting ‘percentage’ to 0 will not change the image, setting it to one means that the image will be completely whitened:

```
import numpy as np
import matplotlib.pyplot as plt
def tint(imag, percent):
    """
    imag: the image which will be shaded
    percent: a value between 0 (image will remain unchanged
             and 1 (image will completely white)
    """
    tinted_imag = imag + (np.ones(imag.shape) - imag) * percent
    return tinted_imag
windmills = plt.imread('windmills.png')
tinted_windmills = tint(windmills, 0.8)
plt.axis("off")
plt.imshow(tinted_windmills)
```

Output::

```
<matplotlib.image.AxesImage at 0x7f9e6cd99978>
```

A shade is the mixture of a color with black, which reduces lightness.

```
import numpy as np
import matplotlib.pyplot as plt
def shade(imag, percent):
    """
    imag: the image which will be shaded
    percent: a value between 0 (image will remain unchanged
             and 1 (image will be blackened)
    """
    tinted_imag = imag * (1 - percent)
    return tinted_imag
windmills = plt.imread('windmills.png')
tinted_windmills = shade(windmills, 0.7)
plt.imshow(tinted_windmills)
```

Output::

```
<matplotlib.image.AxesImage at 0x7f9e6cd20048>
def vertical_gradient_line(image, reverse=False):
    """
    We create a horizontal gradient line with the shape (1, image.shape[1], 3))
    The values are incremented from 0 to 1, if reverse is False,
    otherwise the values are decremented from 1 to 0.
    """
    number_of_columns = image.shape[1]
    if reverse:
        C = np.linspace(1, 0, number_of_columns)
    else:
        C = np.linspace(0, 1, number_of_columns)
    C = np.dstack((C, C, C))
    return C
horizontal_brush = vertical_gradient_line(windmills)
tinted_windmills =  windmills * horizontal_brush
plt.axis("off")
plt.imshow(tinted_windmills)
```

Output::

```
<matplotlib.image.AxesImage at 0x7f9e6ccb3d68>
```

We will tint the image now from right to left by setting the reverse parameter of our Python function to “True”:

```
def vertical_gradient_line(image, reverse=False):
    """
    We create a horizontal gradient line with the shape (1, image.shape[1], 3))
    The values are incremented from 0 to 1, if reverse is False,
    otherwise the values are decremented from 1 to 0.
    """
    number_of_columns = image.shape[1]
    if reverse:
        C = np.linspace(1, 0, number_of_columns)
    else:
        C = np.linspace(0, 1, number_of_columns)
    C = np.dstack((C, C, C))
    return C
horizontal_brush = vertical_gradient_line(windmills, reverse=True)
tinted_windmills =  windmills * horizontal_brush
plt.axis("off")
plt.imshow(tinted_windmills)
```

Output::

```
<matplotlib.image.AxesImage at 0x7f9e6cbc82b0>
def horizontal_gradient_line(image, reverse=False):
    """
    We create a vertical gradient line with the shape (image.shape[0], 1, 3))
    The values are incremented from 0 to 1, if reverse is False,
    otherwise the values are decremented from 1 to 0.
    """
    number_of_rows, number_of_columns = image.shape[:2]
    C = np.linspace(1, 0, number_of_rows)
    C = C[np.newaxis,:]
    C = np.concatenate((C, C, C)).transpose()
    C = C[:, np.newaxis]
    return C
vertical_brush = horizontal_gradient_line(windmills)
tinted_windmills =  windmills
plt.imshow(tinted_windmills)
```

Output::

```
<matplotlib.image.AxesImage at 0x7f9e6cb52390>
A tone is produced either by the mixture of a color with gray, or by both tinting and shading.
charlie = plt.imread('Chaplin.png')
plt.gray()
print(charlie)
plt.imshow(charlie)
[[ 0.16470589  0.16862746  0.17647059 ...,  0.          0.          0.        ]
 [ 0.16078432  0.16078432  0.16470589 ...,  0.          0.          0.        ]
 [ 0.15686275  0.15686275  0.16078432 ...,  0.          0.          0.        ]
 ...,
 [ 0.          0.          0.         ...,  0.          0.          0.        ]
 [ 0.          0.          0.         ...,  0.          0.          0.        ]
 [ 0.          0.          0.         ...,  0.          0.          0.        ]]
```

Output::

```
<matplotlib.image.AxesImage at 0x7f9e6cad8438>
colored = np.dstack((charlie*0.1, charlie*1, charlie*0.5))
plt.imshow(colored)
```

Output::

```
<matplotlib.image.AxesImage at 0x7f9e70047668>
tinting gray scale images: http://scikit-image.org/docs/dev/auto_examples/plot_tinting_grayscale_images.html
```

We will use different colormaps in the following example. The colormaps can be found in matplotlib.pyplot.cm.datad:

```
plt.cm.datad.keys()
```

Output::

```
dict_keys(['afmhot', 'autumn', 'bone', 'binary', 'bwr', 'brg', 'CMRmap', 'cool', 'copper', 'cubehelix', 'flag', 'gnuplot', 'gnuplot2', 'gray', 'hot', 'hsv', 'jet', 'ocean', 'pink', 'prism', 'rainbow', 'seismic', 'spring', 'summer', 'terrain', 'winter', 'nipy_spectral', 'spectral', 'Blues', 'BrBG', 'BuGn', 'BuPu', 'GnBu', 'Greens', 'Greys', 'Oranges', 'OrRd', 'PiYG', 'PRGn', 'PuBu', 'PuBuGn', 'PuOr', 'PuRd', 'Purples', 'RdBu', 'RdGy', 'RdPu', 'RdYlBu', 'RdYlGn', 'Reds', 'Spectral', 'YlGn', 'YlGnBu', 'YlOrBr', 'YlOrRd', 'gist_earth', 'gist_gray', 'gist_heat', 'gist_ncar', 'gist_rainbow', 'gist_stern', 'gist_yarg', 'coolwarm', 'Wistia', 'Accent', 'Dark2', 'Paired', 'Pastel1', 'Pastel2', 'Set1', 'Set2', 'Set3', 'tab10', 'tab20', 'tab20b', 'tab20c', 'Vega10', 'Vega20', 'Vega20b', 'Vega20c', 'afmhot_r', 'autumn_r', 'bone_r', 'binary_r', 'bwr_r', 'brg_r', 'CMRmap_r', 'cool_r', 'copper_r', 'cubehelix_r', 'flag_r', 'gnuplot_r', 'gnuplot2_r', 'gray_r', 'hot_r', 'hsv_r', 'jet_r', 'ocean_r', 'pink_r', 'prism_r', 'rainbow_r', 'seismic_r', 'spring_r', 'summer_r', 'terrain_r', 'winter_r', 'nipy_spectral_r', 'spectral_r', 'Blues_r', 'BrBG_r', 'BuGn_r', 'BuPu_r', 'GnBu_r', 'Greens_r', 'Greys_r', 'Oranges_r', 'OrRd_r', 'PiYG_r', 'PRGn_r', 'PuBu_r', 'PuBuGn_r', 'PuOr_r', 'PuRd_r', 'Purples_r', 'RdBu_r', 'RdGy_r', 'RdPu_r', 'RdYlBu_r', 'RdYlGn_r', 'Reds_r', 'Spectral_r', 'YlGn_r', 'YlGnBu_r', 'YlOrBr_r', 'YlOrRd_r', 'gist_earth_r', 'gist_gray_r', 'gist_heat_r', 'gist_ncar_r', 'gist_rainbow_r', 'gist_stern_r', 'gist_yarg_r', 'coolwarm_r', 'Wistia_r', 'Accent_r', 'Dark2_r', 'Paired_r', 'Pastel1_r', 'Pastel2_r', 'Set1_r', 'Set2_r', 'Set3_r', 'tab10_r', 'tab20_r', 'tab20b_r', 'tab20c_r', 'Vega10_r', 'Vega20_r', 'Vega20b_r', 'Vega20c_r'])
```

```
import numpy as np
import matplotlib.pyplot as plt
charlie = plt.imread('Chaplin.png')
#  colormaps plt.cm.datad
# cmaps = set(plt.cm.datad.keys())
cmaps = {'afmhot', 'autumn', 'bone', 'binary', 'bwr', 'brg',
         'CMRmap', 'cool', 'copper', 'cubehelix', 'Greens'}
X = [  (4,3,1, (1, 0, 0)), (4,3,2, (0.5, 0.5, 0)), (4,3,3, (0, 1, 0)),
       (4,3,4, (0, 0.5, 0.5)),  (4,3,(5,8), (0, 0, 1)), (4,3,6, (1, 1, 0)),
       (4,3,7, (0.5, 1, 0) ),               (4,3,9, (0, 0.5, 0.5)),
       (4,3,10, (0, 0.5, 1)), (4,3,11, (0, 1, 1)),    (4,3,12, (0.5, 1, 1))]
fig = plt.figure(figsize=(6, 5))
#fig.subplots_adjust(bottom=0, left=0, top = 0.975, right=1)
for nrows, ncols, plot_number, factor in X:
    sub = fig.add_subplot(nrows, ncols, plot_number)
    sub.set_xticks([])
    plt.colors()

    sub.imshow(charlie*0.0002, cmap=cmaps.pop())
    sub.set_yticks([])
#fig.show()
```

> Let's Start! [Check out the original post on Medium.](https://levelup.gitconnected.com/image-processing-in-python-b5e3e11e1413)
