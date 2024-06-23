document.addEventListener('DOMContentLoaded', async () => {
  const path = '../../dados/informacoes.json';
  const container = document.querySelector('.circle-container');

  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }

    const data = await response.json();
    const paths_icons = data?.data?.images?.icons;

    if (!paths_icons) {
      throw new Error('Estrutura JSON inválida');
    }

    const icons = [
      { src: paths_icons.pyton_icon, alt: 'Python', icon: 'python'},
      { src: paths_icons.keras_icon, alt: 'Keras', icon: 'keras'},
      { src: paths_icons.tensorflow_icon, alt: 'TensorFlow', icon: 'tensorflow'},
      { src: paths_icons.matplotlib_icon, alt: 'Matplotlib', icon: 'matplotlib'},
      { src: paths_icons.pandas_icon, alt: 'Pandas', icon: 'pandas'},
      { src: paths_icons.seaborn_icon, alt: 'Seaborn', icon: 'seaborn'},
      { src: paths_icons.scikit_learn_icon, alt: 'Scikit-learn', icon: 'scikit-learn'},
      { src: paths_icons.numpy_icon, alt: 'NumPy', icon: 'numpy'},
      { src: paths_icons.postgresql_icon, alt: 'PostgreSQL', icon: 'postgresql'},
      { src: paths_icons.powebi_icon, alt: 'Power BI', icon: 'powerbi'},
      { src: paths_icons.excel_icon, alt: 'Excel', icon: 'excel'},
      { src: paths_icons.mojo_icon, alt: 'Mojo Language', icon: 'mojo lang'},
    ];

    icons.forEach((icon) => {
      const img = document.createElement('img');
      img.src = icon.src;
      img.alt = icon.alt;
      img.title = icon.alt;  // Corrige o atributo title para usar icon.alt
      container.appendChild(img);
    });
   
  } catch (error) {
    console.error('Erro:', error);
    container.innerHTML = `<p>Erro ao carregar os dados: ${error.message}</p>`;
  }
});
