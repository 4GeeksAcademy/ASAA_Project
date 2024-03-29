"""empty message

Revision ID: fe0ced9248f0
Revises: 
Create Date: 2024-03-13 20:03:17.819318

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fe0ced9248f0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('admin',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('camarero',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('cliente',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('menu',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_admin', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('description', sa.String(length=120), nullable=False),
    sa.ForeignKeyConstraint(['id_admin'], ['admin.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('mesa',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_admin', sa.Integer(), nullable=True),
    sa.Column('id_camarero', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.ForeignKeyConstraint(['id_admin'], ['admin.id'], ),
    sa.ForeignKeyConstraint(['id_camarero'], ['camarero.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('producto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_menu', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=80), nullable=False),
    sa.Column('description', sa.String(length=120), nullable=False),
    sa.Column('price', sa.String(length=80), nullable=False),
    sa.ForeignKeyConstraint(['id_menu'], ['menu.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('pedido',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_cliente', sa.Integer(), nullable=True),
    sa.Column('id_mesa', sa.Integer(), nullable=True),
    sa.Column('date', sa.String(length=80), nullable=False),
    sa.Column('total_amount', sa.String(length=80), nullable=False),
    sa.Column('status', sa.String(length=80), nullable=False),
    sa.ForeignKeyConstraint(['id_cliente'], ['producto.id'], ),
    sa.ForeignKeyConstraint(['id_mesa'], ['pedido.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('pago',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_cliente', sa.Integer(), nullable=True),
    sa.Column('id_pedido', sa.Integer(), nullable=True),
    sa.Column('date', sa.String(length=80), nullable=False),
    sa.Column('metodo', sa.String(length=120), nullable=False),
    sa.ForeignKeyConstraint(['id_cliente'], ['cliente.id'], ),
    sa.ForeignKeyConstraint(['id_pedido'], ['pedido.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('producto_pedido',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('id_producto', sa.Integer(), nullable=True),
    sa.Column('id_pedido', sa.Integer(), nullable=True),
    sa.Column('status', sa.String(length=80), nullable=False),
    sa.ForeignKeyConstraint(['id_pedido'], ['pedido.id'], ),
    sa.ForeignKeyConstraint(['id_producto'], ['producto.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('producto_pedido')
    op.drop_table('pago')
    op.drop_table('pedido')
    op.drop_table('producto')
    op.drop_table('mesa')
    op.drop_table('menu')
    op.drop_table('user')
    op.drop_table('cliente')
    op.drop_table('camarero')
    op.drop_table('admin')
    # ### end Alembic commands ###
